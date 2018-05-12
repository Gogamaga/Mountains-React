import {
    GET_ALL_ARTICLES,
    DELETE_ONE_ARTICLE,
    REQUEST_ARTICLE,
    EDIT_ARTICLE,
    SAVE_ARTICLE,
    GET_ONE_ARTICLE,
    BACK_TO_ARTICLES_LIST
} from "../../constants/admin";

export default function reducer(
    state = { isFetching: false, articles: [], editingArticle: {} },
    action
) {
    switch (action.type) {
        case REQUEST_ARTICLE:
            return { ...state, isFetching: true };
        case GET_ALL_ARTICLES:
            return { ...state, articles: action.articles, isFetching: false };
        case GET_ONE_ARTICLE:
            return {
                ...state,
                editingArticle: action.article
            };
        case SAVE_ARTICLE:
            return {
                ...state,
                editingArticle: action.article
            };
        case DELETE_ONE_ARTICLE:
            return {
                ...state,
                articles: state.articles.filter(article => article._id !== action.id)
            };
        case EDIT_ARTICLE:
            return {
                ...state,
                editingArticle: action.article
            };
        case BACK_TO_ARTICLES_LIST:
            return {
                ...state,
                editingArticle: {
                    name: "",
                    mountain: "",
                    discription: "",
                    fotos: []
                }
            };
        default:
            return state;
    }
}
