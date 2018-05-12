import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Main from "../../components/admin/Main";

function mapStateToProps(state) {
    return {
        activeLink: state.activeNavigationLink
    };
}

export default withRouter(connect(mapStateToProps)(Main));
