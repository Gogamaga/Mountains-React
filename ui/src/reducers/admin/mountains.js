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

export default function reducer(
    state = {
        mountains: [],
        isFetching: false,
        editingMountain: {
            name: "",
            height: "",
            country: "",
            system: "",
            coordinates: {
                latitude: "",
                longitude: ""
            }
        }
    },
    action
) {
    switch (action.type) {
        case REQUEST_MOUNTAINS:
            return {
                ...state,
                isFetching: true
            };
        case GET_ALL_MOUNTAINS:
            return { ...state, mountains: action.mountains, isFetching: false };
        case SAVE_MOUNTAIN:
            return {
                ...state,
                editingMountain: action.mountain
            };
        case EDITED_MOUNTAIN:
            return {
                ...state,
                editingMountain: action.mountain
            };
        case GET_ONE_MOUNTAIN:
            return {
                ...state,
                editingMountain: action.mountain
            };
        case BACK_TO_MOUNTAINS_LIST:
            return {
                ...state,
                editingMountain: {
                    name: "",
                    height: "",
                    country: "",
                    system: "",
                    coordinates: {
                        latitude: "",
                        longitude: ""
                    }
                }
            };
        case DELETE_ONE_MOUNTAIN:
            return {
                ...state,
                mountains: state.mountains.filter(mountain => mountain._id !== action.id)
            };
        default:
            return state;
    }
}
