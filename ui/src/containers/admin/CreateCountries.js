import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import CreateCountries from "../../components/admin/CreateCountries";
import { countriesApi } from "../../actions/admin/countriesApi";

function mapStateToProps(state) {
    return {
        editingCountry: state.countriesApi.editingCountry
    };
}
function mapDispatchToprops(dispatch) {
    return {
        backToList() {
            return dispatch(countriesApi.backToList());
        },
        save(country) {
            return dispatch(countriesApi.saveCountry(country));
        },
        edit(id, country) {
            return dispatch(countriesApi.editCountry(id, country));
        },
        getOneCountry(id) {
            return dispatch(countriesApi.getOne(id));
        }
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToprops)(CreateCountries));
