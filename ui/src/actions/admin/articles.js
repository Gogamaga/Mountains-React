import {
    GET_ALL_ARTICLES,
    DELETE_ONE_ARTICLE,
    REQUEST_ARTICLE,
    EDIT_ARTICLE,
    SAVE_ARTICLE,
    GET_ONE_ARTICLE,
    BACK_TO_ARTICLES_LIST,
    AUTH_FAIL
} from "../../constants/admin";

import { articles } from "../../api/admin";
export const articlesAction = {
    getAll() {
        return function(dispatch) {
            dispatch({ type: REQUEST_ARTICLE });

            return articles
                .getAll()
                .then(result => {
                    return result.data;
                })
                .then(data =>
                    dispatch({
                        type: GET_ALL_ARTICLES,
                        articles: data
                    })
                )
                .catch(err => {
                    if (err.response.status === 401) {
                        return dispatch({ type: AUTH_FAIL });
                    }
                });
        };
    },
    deleteOne(id) {
        return function(dispatch) {
            articles.deleteOne(id).then(({ data }) =>
                dispatch({
                    type: DELETE_ONE_ARTICLE,
                    id
                })
            );
        };
    },
    getOne(id) {
        return function(dispatch) {
            articles.getOne(id).then(({ data }) => {
                dispatch({ type: GET_ONE_ARTICLE, article: data });
            });
        };
    },
    save(article) {
        return function(dispatch) {
            return articles
                .save(article)
                .then(({ data }) => dispatch({ type: SAVE_ARTICLE, article: data }));
        };
    },
    editArticle(id, article) {
        return function(dispatch) {
            return articles
                .edit(id, article)
                .then(({ data }) => dispatch({ type: EDIT_ARTICLE, article: data }));
        };
    },
    backToList() {
        return {
            type: BACK_TO_ARTICLES_LIST
        };
    }
};
