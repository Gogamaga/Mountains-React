import React, { Component } from "react";
import { connect } from "react-redux";

import CreateArticle from "../../../components/admin/articles/CreateArticle";
import { mountainsAction } from "../../../actions/admin/mountains";
import { articlesAction } from "../../../actions/admin/articles";

function mapStateToProps(state) {
    return {
        mountains: state.mountains.mountains,
        editingArticle: state.articles.editingArticle
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getAllMountains: () => dispatch(mountainsAction.getAll()),
        saveArticle(article) {
            return dispatch(articlesAction.save(article));
        },
        getOneArticle(id) {
            return dispatch(articlesAction.getOne(id));
        },
        editArticle(id, article) {
            return dispatch(articlesAction.editArticle(id, article));
        },
        backToList() {
            return dispatch(articlesAction.backToList());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateArticle);
