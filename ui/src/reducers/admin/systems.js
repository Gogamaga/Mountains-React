import {
    GET_ALL_SYSTEMS,
    REQUEST_SYSTEMS,
    ADD_NEW_SYSTEM,
    GET_ONE_SYSTEM,
    SAVE_SYSTEM,
    EDITED_SYSTEM,
    DELETE_ONE_SYSTEM
} from "../../constants/admin";

export default function reducer(
    state = { systems: [], isFetching: false, editingSystem: {} },
    action
) {
    switch (action.type) {
        case REQUEST_SYSTEMS:
            return {
                ...state,
                isFetching: true
            };
        case GET_ALL_SYSTEMS:
            return {
                ...state,
                systems: action.systems,
                isFetching: false
            };
        case ADD_NEW_SYSTEM:
            return {
                ...state,
                editingSystem: action.system
            };
        case GET_ONE_SYSTEM:
            return {
                ...state,
                editingSystem: action.system
            };
        case SAVE_SYSTEM:
            return {
                ...state,
                editingSystem: action.system
            };
        case EDITED_SYSTEM:
            return {
                ...state,
                editingSystem: action.system
            };
        case DELETE_ONE_SYSTEM:
            return {
                ...state,
                systems: state.systems.filter(system => system._id !== action.id)
            };
        default:
            return state;
    }
}
