import {
    GET_NEWEST_ARTICLES,
    GET_MOST_VIEWED_ARTICLES,
    GET_ONE_ARTICLE,
    GET_ARTICLES_BY_MOUNTAIN_NAME,
    RESET_ARTICLE
} from "../../constants/ui";

import { articles } from "../../api/ui";

export const articlesUIAction = {
    getNewest() {
        return function(dispatch) {
            return articles
                .getNewest()
                .then(({ data }) => dispatch({ type: GET_NEWEST_ARTICLES, articles: data }));
        };
    },
    getMostViewed() {
        return function(dispatch) {
            return articles
                .getMostViewed()
                .then(({ data }) => dispatch({ type: GET_MOST_VIEWED_ARTICLES, articles: data }));
        };
    },
    getOneArticle(id) {
        return function(dispatch) {
            return articles
                .getOneArticle(id)
                .then(({ data }) => dispatch({ type: GET_ONE_ARTICLE, article: data }));
        };
    },
    getArticlesByMountainName(name) {
        return function(dispatch) {
            return articles
                .getArticlesByMountainName(name)
                .then(({ data }) =>
                    dispatch({ type: GET_ARTICLES_BY_MOUNTAIN_NAME, articles: data })
                );
        };
    },
    resetArticle() {
        return { type: RESET_ARTICLE };
    }
};
