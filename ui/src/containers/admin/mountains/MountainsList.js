import React, { Component } from "react";
import { connect } from "react-redux";

import { mountainsAction } from "../../../actions/admin/mountains";

import MountainsList from "../../../components/admin/mountains/MountainsList";

function mapStateToProps(state) {
    return {
        mountains: state.mountains.mountains,
        isFetching: state.mountains.isFetching
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getAllMountains() {
            return dispatch(mountainsAction.getAll());
        },
        deleteOneMountain(id) {
            return dispatch(mountainsAction.deleteOneMountain(id));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MountainsList);
