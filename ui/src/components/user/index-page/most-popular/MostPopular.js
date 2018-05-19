import React, { Component } from "react";
import { Link, withRouter, NavLink } from "react-router-dom";

import MostPopularArticles from "./MostPopularArticles";
import RandomPhotoMountains from "./RandomPhotoMountains";

export default class MostPopular extends Component {
    componentDidMount() {
        this.props.getMostViewed();
        this.props.getRandomPhotos();
    }
    render() {
        const { mostViewed = [], randomPhotos = [] } = this.props;
        return (
            <section class="most-popular">
                <MostPopularArticles articles={mostViewed} header={"Найпопулярніші"} />
                <RandomPhotoMountains randomPhoto={randomPhotos} />
            </section>
        );
    }
}
