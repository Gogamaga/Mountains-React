import { users } from "../../api/admin";

import { AUTH_FAIL, AUTH_SUCCESS } from "../../constants/admin";

export const usersAction = {
    login(user) {
        return function(dispatch) {
            users
                .login(user)
                .then(
                    result =>
                        result ? dispatch({ type: AUTH_SUCCESS }) : dispatch({ type: AUTH_FAIL })
                );
        };
    }
};
