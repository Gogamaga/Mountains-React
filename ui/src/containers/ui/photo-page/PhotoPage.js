import React, { Component } from "react";
import { connect } from "react-redux";

import PhotoPage from "../../../components/user/photo-page/PhotoPage";

import { photosUIAction } from "../../../actions/ui/photos";

function mapStateToProps(state) {
    return {
        photos: state.photosUI.photos
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getAllPhotos() {
            return dispatch(photosUIAction.getAllPhotos());
        },
        getOneMountainPhotos(id) {
            return dispatch(photosUIAction.getOneMountainPhotos(id));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoPage);
