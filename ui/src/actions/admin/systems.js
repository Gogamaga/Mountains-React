import {
    GET_ALL_SYSTEMS,
    REQUEST_SYSTEMS,
    ADD_NEW_SYSTEM,
    GET_ONE_SYSTEM,
    SAVE_SYSTEM,
    EDITED_SYSTEM,
    DELETE_ONE_SYSTEM
} from "../../constants/admin";

import { systems } from "../../api/admin";

export const systemsAction = {
    getAll() {
        return function(dispatch) {
            dispatch({ type: REQUEST_SYSTEMS });
            systems.getAll().then(({ data }) => dispatch({ type: GET_ALL_SYSTEMS, systems: data }));
        };
    },
    getOne(id) {
        return function(dispatch) {
            systems.getOne(id).then(({ data }) => dispatch({ type: GET_ONE_SYSTEM, system: data }));
        };
    },
    saveSystem(system) {
        return function(dispatch) {
            systems.save(system).then(({ data }) => dispatch({ type: SAVE_SYSTEM, system: data }));
        };
    },
    editSystem(id, system) {
        return function(dispatch) {
            systems
                .edit(id, system)
                .then(({ data }) => dispatch({ type: EDITED_SYSTEM, system: data }));
        };
    },
    deleteOneSystem(id) {
        return function(dispatch) {
            systems.deleteOne(id).then(({ data }) => dispatch({ type: DELETE_ONE_SYSTEM, id }));
        };
    },
    addNew() {
        return {
            type: ADD_NEW_SYSTEM,
            system: { name: "" }
        };
    }
};
