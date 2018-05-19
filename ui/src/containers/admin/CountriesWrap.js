import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import CountriesWrap from "../../components/admin/CountriesWrap";

function mapStateToProps(state) {
    return {
        isFetching: state.countriesApi.isFetching
    };
}

export default withRouter(connect(mapStateToProps)(CountriesWrap));
