import React, { Component } from "react";
import { connect } from "react-redux";

import MostPopular from "../../../../components/user/index-page/most-popular/MostPopular";
import { articlesUIAction } from "../../../../actions/ui/articles";
import { photosUIAction } from "../../../../actions/ui/photos";

function mapStateToProps(state) {
    return {
        mostViewed: state.articlesUI.mostViewed,
        randomPhotos: state.photosUI.randomPhotos
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getMostViewed() {
            return dispatch(articlesUIAction.getMostViewed());
        },
        getRandomPhotos() {
            return dispatch(photosUIAction.getRandomPhotos());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MostPopular);
