import { GET_ALL_SYSTEMS } from "../../constants/ui";

export default function reducer(state = { systems: [] }, action) {
    switch (action.type) {
        case GET_ALL_SYSTEMS:
            return {
                ...state,
                systems: action.systems
            };

        default:
            return state;
    }
}
