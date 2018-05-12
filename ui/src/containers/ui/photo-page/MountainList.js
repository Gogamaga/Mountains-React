import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import MountainList from "../../../components/user/photo-page/MountainList";

import { photosUIAction } from "../../../actions/ui/photos";

function mapStateToProps(state) {
    return {
        mountainsNameList: state.photosUI.mountainsNameList
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getMountainsNamePhotos() {
            return dispatch(photosUIAction.getMountainsNamePhotos());
        }
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MountainList));
