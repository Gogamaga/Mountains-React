import { AUTH_FAIL, AUTH_SUCCESS } from "../../constants/admin";

export default function reducer(state = { access: false }, action) {
    switch (action.type) {
        case AUTH_FAIL:
            return {
                ...state,
                access: false
            };
        case AUTH_SUCCESS:
            return {
                ...state,
                access: true
            };
            break;

        default:
            return state;
    }
}
