import React, { Component } from "react";
import { connect } from "react-redux";

import Newest from "../../../../components/user/index-page/newest/Newest";

import { articlesUIAction } from "../../../../actions/ui/articles";

function mapStateToProps(state) {
    return {
        articles: state.articlesUI.articles
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getNewest() {
            return dispatch(articlesUIAction.getNewest());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Newest);
