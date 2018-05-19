import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import SystemsList from "../../../components/admin/systems/SystemsList";

import { systemsAction } from "../../../actions/admin/systems";

function mapStateToProps(state) {
    return {
        systems: state.systems.systems,
        isFetching: state.systems.isFetching
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getAllSystems() {
            return dispatch(systemsAction.getAll());
        },
        addNew() {
            return dispatch(systemsAction.addNew());
        },
        deleteOne(id) {
            return dispatch(systemsAction.deleteOneSystem(id));
        }
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SystemsList));
