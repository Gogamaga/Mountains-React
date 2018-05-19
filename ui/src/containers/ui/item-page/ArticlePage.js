import React, { Component } from "react";
import { connect } from "react-redux";

import ArticlePage from "../../../components/user/item-page/ArticlePage";

import { articlesUIAction } from "../../../actions/ui/articles";

function mapStateToProps(state) {
    return {
        article: state.articlesUI.article,
        articles: state.articlesUI.articles
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getOneArticles(id) {
            return dispatch(articlesUIAction.getOneArticle(id));
        },
        getArticlesByMountainName(name) {
            return dispatch(articlesUIAction.getArticlesByMountainName(name));
        },
        resetArticle() {
            return dispatch(articlesUIAction.resetArticle());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);
