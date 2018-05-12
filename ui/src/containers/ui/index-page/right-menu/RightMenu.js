import React, { Component } from "react";
import { connect } from "react-redux";

import Newest from "../../../../components/user/index-page/right-menu/RightMenu";

import { systemsUIAction } from "../../../../actions/ui/systems";

function mapStateToProps(state) {
    return {
        systems: state.systemsUI.systems
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getAllSystem() {
            return dispatch(systemsUIAction.getAllSystem());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Newest);
