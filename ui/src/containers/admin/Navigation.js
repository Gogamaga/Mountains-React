import React, { Component } from "react";
import { connect } from "react-redux";

import Navigation from "../../components/admin/Navigation";
import action from "../../actions/admin/activeNavigationLink";

function mapStateToProps(state) {
    return {
        activeLink: state.activeNavigationLink
    };
}
function mapDistpatchToProps(dispatch) {
    return {
        onClickNavigation: link => dispatch(action(link))
    };
}

export default connect(mapStateToProps, mapDistpatchToProps)(Navigation);
