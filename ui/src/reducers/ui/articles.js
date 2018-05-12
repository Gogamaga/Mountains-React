import {
    GET_NEWEST_ARTICLES,
    GET_MOST_VIEWED_ARTICLES,
    GET_ONE_ARTICLE,
    GET_ARTICLES_BY_MOUNTAIN_NAME,
    RESET_ARTICLE
} from "../../constants/ui";

export default function reducer(state = { articles: [], mostViewed: [], article: {} }, action) {
    switch (action.type) {
        case GET_NEWEST_ARTICLES:
            return {
                ...state,
                articles: action.articles
            };
        case GET_MOST_VIEWED_ARTICLES:
            return {
                ...state,
                mostViewed: action.articles
            };
        case GET_ONE_ARTICLE:
            return {
                ...state,
                article: action.article
            };
        case GET_ARTICLES_BY_MOUNTAIN_NAME:
            return {
                ...state,
                articles: action.articles
            };
        case RESET_ARTICLE:
            return {
                ...state,
                article: {}
            };
        default:
            return state;
    }
}
