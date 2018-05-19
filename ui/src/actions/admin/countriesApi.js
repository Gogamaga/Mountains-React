import {
    GET_ALL_COUNTRIES,
    EDIT_COUNTRIES,
    GET_ONE_COUNTRIES,
    REQUEST_COUNTRIES,
    ADD_NEW_COUNTRIES,
    BACK_TO_COUNTRIES_LIST,
    EDITED_COUNTRY,
    DELETE_ONE_COUNTRY
} from "../../constants/admin";

import { countries } from "../../api/admin";

export const countriesApi = {
    getAll() {
        return function(dispatch) {
            dispatch({ type: REQUEST_COUNTRIES });
            countries
                .getAll()
                .then(({ data }) => dispatch({ type: GET_ALL_COUNTRIES, countries: data }));
        };
    },
    getOne(id) {
        return function(dispatch) {
            dispatch({ type: EDIT_COUNTRIES });
            countries
                .getOne(id)
                .then(({ data }) => dispatch({ type: GET_ONE_COUNTRIES, country: data }));
        };
    },
    addNew() {
        return {
            type: ADD_NEW_COUNTRIES,
            country: { name: "" }
        };
    },
    backToList() {
        return {
            type: BACK_TO_COUNTRIES_LIST
        };
    },
    saveCountry(country) {
        return function(dispatch) {
            countries
                .save(country)
                .then(({ data }) => dispatch({ type: EDITED_COUNTRY, country: data }));
        };
    },
    editCountry(id, country) {
        return function(dispatch) {
            countries
                .edit(id, country)
                .then(({ data }) => dispatch({ type: EDITED_COUNTRY, country: data }));
        };
    },
    deleteOneCountry(id) {
        return function(dispatch) {
            countries.deleteOne(id).then(result => dispatch({ type: DELETE_ONE_COUNTRY, id }));
        };
    }
};
