import { AUTH_FAIL } from "../../constants/admin";

export default function(state = { isLogged: true }, action) {
    switch (action.type) {
        case AUTH_FAIL:
            return {
                ...state,
                isLogged: false
            };
        default:
            return state;
    }
}
