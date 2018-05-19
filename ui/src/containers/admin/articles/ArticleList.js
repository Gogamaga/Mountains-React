import React, { Component } from "react";
import { connect } from "react-redux";

import { articlesAction } from "../../../actions/admin/articles";

import ArticleList from "../../../components/admin/articles/ArticleList";

function mapStateToProps(state) {
    return {
        isFetching: state.articles.isFetching,
        articles: state.articles.articles
    };
}
function mapDistpatchToProps(dispatch) {
    return {
        getAll: () => dispatch(articlesAction.getAll()),
        deleteOne: id => dispatch(articlesAction.deleteOne(id))
    };
}

export default connect(mapStateToProps, mapDistpatchToProps)(ArticleList);
