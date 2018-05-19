import {
    GET_ALL_MOUNTAINS,
    ADD_NEW_MOUNTAIN,
    SAVE_MOUNTAIN,
    GET_ONE_MOUNTAIN,
    REQUEST_MOUNTAINS,
    EDITED_MOUNTAIN,
    BACK_TO_MOUNTAINS_LIST,
    DELETE_ONE_MOUNTAIN
} from "../../constants/admin";

import { mountains } from "../../api/admin";

export const mountainsAction = {
    getAll() {
        return function(dispatch) {
            dispatch({ type: REQUEST_MOUNTAINS });
            return mountains
                .getAll()
                .then(({ data }) => dispatch({ type: GET_ALL_MOUNTAINS, mountains: data }))
                .catch(err => console.log(err));
        };
    },
    getOne(id) {
        return function(dispatch) {
            return mountains
                .getOne(id)
                .then(({ data }) => dispatch({ type: GET_ONE_MOUNTAIN, mountain: data }));
        };
    },
    editMountain(id, mountain) {
        return function(dispatch) {
            return mountains
                .edit(id, mountain)
                .then(({ data }) => dispatch({ type: EDITED_MOUNTAIN, mountain: data }));
        };
    },
    save(mountain) {
        return function(dispatch) {
            return mountains
                .save(mountain)
                .then(({ data }) => dispatch({ type: SAVE_MOUNTAIN, mountain: data }));
        };
    },
    deleteOneMountain(id) {
        return function(dispatch) {
            return mountains
                .deleteOne(id)
                .then(({ data }) => dispatch({ type: DELETE_ONE_MOUNTAIN, id }));
        };
    },
    backTolist() {
        return {
            type: BACK_TO_MOUNTAINS_LIST
        };
    }
};
