import React, { Component } from "react";
import { connect } from "react-redux";

import CreateMountain from "../../../components/admin/mountains/CreateMountain";
import { countriesApi } from "../../../actions/admin/countriesApi";
import { systemsAction } from "../../../actions/admin/systems";
import { mountainsAction } from "../../../actions/admin/mountains";

function mapStateToProps(state) {
    return {
        editingMountain: state.mountains.editingMountain,
        countries: state.countriesApi.countries,
        systems: state.systems.systems
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getAllCountries() {
            return dispatch(countriesApi.getAll());
        },
        getAllSystems() {
            return dispatch(systemsAction.getAll());
        },
        getOneMountain(id) {
            return dispatch(mountainsAction.getOne(id));
        },
        save(mountain) {
            return dispatch(mountainsAction.save(mountain));
        },
        editMountain(id, mountain) {
            return dispatch(mountainsAction.editMountain(id, mountain));
        },
        backToList() {
            return dispatch(mountainsAction.backTolist());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateMountain);
