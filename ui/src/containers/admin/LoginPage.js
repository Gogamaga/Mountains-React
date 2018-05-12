import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import LoginPage from "../../components/admin/LoginPage";

import { usersAction } from "../../actions/admin/users";

function mapDispatchToProps(dispatch) {
    return {
        login(user) {
            return dispatch(usersAction.login(user));
        }
    };
}
function mapStateToProps(state) {
    return {
        access: state.users.access
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
