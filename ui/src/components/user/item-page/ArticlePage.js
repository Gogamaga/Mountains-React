import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import GoogleMapReact from "google-map-react";

import Maps from "./Maps";
import ArticlePagePhotoContainer from "./ArticlePagePhotoContainer";
import MostPopularArticles from "../index-page/most-popular/MostPopularArticles";
import PhotoViewing from "../PhotoViewing";

export default class ArticlePage extends Component {
    state = {
        photos: [],
        viewingPhoto: false,
        activePhotoSrc: ""
    };

    componentDidMount() {
        this.props.getOneArticles(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.article.mountain !== nextProps.article.mountain) {
            const mountainName = nextProps.article.mountain.name;
            this.props.getArticlesByMountainName(mountainName);
        }
        this.props.match.params.id !== nextProps.match.params.id &&
            this.props.getOneArticles(nextProps.match.params.id);
        this.props.article.fotos &&
            this.setState(prevState => {
                prevState.photos = this.props.article.fotos.map(foto => foto.src);
                return prevState;
            });
    }
    componentWillUnmount() {
        this.props.resetArticle();
    }
    handleViewingPhoto = ({ target }) => {
        const activePhotoSrc = target.src;
        this.setState({ viewingPhoto: true, activePhotoSrc });
    };
    handleCloseViewing = () => {
        this.setState({ viewingPhoto: false });
    };
    render() {
        const { photos, viewingPhoto, activePhotoSrc } = this.state;
        const {
            articles = [],
            article: {
                discription = "",
                fotos = [],
                mountain = { coordinates: { latitude: 0, longitude: 0 } },
                name
            }
        } = this.props;
        return (
            <div class="item-page">
                {viewingPhoto && (
                    <PhotoViewing
                        photoList={fotos}
                        activePhotoSrc={activePhotoSrc}
                        handleCloseViewing={this.handleCloseViewing}
                    />
                )}

                <ArticlePagePhotoContainer photos={fotos} onClick={this.handleViewingPhoto} />
                <div className="item-page__mount-info">
                    <ul className="item-page__mount-info__list">
                        <li className="item-page__mount-info__list__item">Гора: {mountain.name}</li>
                        <li className="item-page__mount-info__list__item">
                            Країна: {mountain.country}
                        </li>
                        <li className="item-page__mount-info__list__item">
                            Система: {mountain.system}
                        </li>
                        <li className="item-page__mount-info__list__item">
                            Висота: {mountain.height} м.
                        </li>
                    </ul>
                </div>
                <div className="item-page__mount-description">
                    {discription.split("\n").map(text => <p>{text}</p>)}
                </div>
                <div className="item-page__google-maps">
                    <Maps
                        lat={+mountain.coordinates.latitude}
                        lng={+mountain.coordinates.longitude}
                    />
                </div>
                <div class="item-page__most-popular">
                    <MostPopularArticles articles={articles.slice(0, 5)} header={"Також читайте"} />
                </div>
            </div>
        );
    }
}
