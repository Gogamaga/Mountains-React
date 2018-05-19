import React, { Component } from "react";
import { connect } from "react-redux";

import CreateSystem from "../../../components/admin/systems/CreateSystem";
import { systemsAction } from "../../../actions/admin/systems";

function mapStateToProps(state) {
    return {
        editingSystem: state.systems.editingSystem
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getOneSystem(id) {
            return dispatch(systemsAction.getOne(id));
        },
        saveSystem(system) {
            return dispatch(systemsAction.saveSystem(system));
        },
        edit(id, system) {
            return dispatch(systemsAction.editSystem(id, system));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateSystem);
