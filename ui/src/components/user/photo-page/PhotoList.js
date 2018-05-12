import React, { Component } from "react";
import { Link } from "react-router-dom";
import Masonry from "masonry-layout";

import PhotoViewing from "../PhotoViewing";

export default class PhotoListItem extends Component {
    state = {
        viewingPhoto: false,
        activePhotoSrc: ""
    };
    componentWillMount() {}
    componentDidMount() {
        // this.masonry.layout();
    }
    componentWillUpdate() {}
    handleViewingPhoto = ({ target }) => {
        const activePhotoSrc = target.src;
        this.setState({ viewingPhoto: true, activePhotoSrc });
    };
    handleCloseViewing = () => {
        this.setState({ viewingPhoto: false });
    };
    createArrayPhotoSrc(photos) {
        return photos.map(photo => photo.src);
    }
    handleImageLoaded = () => {
        this.masonry = new Masonry(this.photoContainer, {
            itemSelector: ".photo-page__container__img",
            gutter: 1
        });
        this.masonry.layout();
        console.log("load");
    };
    render() {
        const { photosMountain = [] } = this.props;
        const { viewingPhoto, activePhotoSrc } = this.state;
        return (
            <section className="photo-page-section">
                {viewingPhoto && (
                    <PhotoViewing
                        photoList={photosMountain.fotos}
                        activePhotoSrc={activePhotoSrc}
                        handleCloseViewing={this.handleCloseViewing}
                    />
                )}

                <h3>{photosMountain.mountainName.name}</h3>
                <div className="photo-page__container" ref={e => (this.photoContainer = e)}>
                    {photosMountain.fotos.map(photo => {
                        return (
                            <img
                                src={photo.src}
                                alt=""
                                className="photo-page__container__img"
                                key={photo.id}
                                onClick={this.handleViewingPhoto}
                                onLoad={this.handleImageLoaded}
                            />
                        );
                    })}
                </div>
            </section>
        );
    }
}
