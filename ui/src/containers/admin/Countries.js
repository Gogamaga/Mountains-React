import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import CountriesList from "../../components/admin/CountriesList";
import { countriesApi } from "../../actions/admin/countriesApi";

function mapStateToProps(state) {
    return {
        countries: state.countriesApi
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getAllCountries() {
            return dispatch(countriesApi.getAll());
        },

        addNew() {
            return dispatch(countriesApi.addNew());
        },
        deleteOne(id) {
            return dispatch(countriesApi.deleteOneCountry(id));
        }
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CountriesList));
