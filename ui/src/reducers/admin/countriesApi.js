import {
    GET_ALL_COUNTRIES,
    GET_ONE_COUNTRIES,
    EDIT_COUNTRIES,
    REQUEST_COUNTRIES,
    ADD_NEW_COUNTRIES,
    BACK_TO_COUNTRIES_LIST,
    EDITED_COUNTRY,
    DELETE_ONE_COUNTRY
} from "../../constants/admin";

export default function reducer(
    state = { countries: [], isFetching: false, editingCountry: {} },
    action
) {
    switch (action.type) {
        case REQUEST_COUNTRIES:
            return { ...state, isFetching: true };
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                isFetching: false,
                countries: action.countries
            };
        case EDIT_COUNTRIES:
            return {
                ...state,
                isFetching: true
            };
        case GET_ONE_COUNTRIES:
            return {
                ...state,
                isFetching: false,
                editingCountry: action.country
            };
        case ADD_NEW_COUNTRIES:
            return {
                ...state,
                editingCountry: action.country
            };
        case BACK_TO_COUNTRIES_LIST:
            return {
                ...state
            };
        case EDITED_COUNTRY:
            return {
                ...state,
                editingCountry: action.country
            };
        case DELETE_ONE_COUNTRY:
            return {
                ...state,
                countries: state.countries.filter(country => country._id !== action.id)
            };
        default:
            return state;
    }
}
