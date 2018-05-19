import { GET_ALL_SYSTEMS } from "../../constants/ui";

import { system } from "../../api/ui";

export const systemsUIAction = {
    getAllSystem() {
        return function(dispatch) {
            return system
                .getAllSystem()
                .then(({ data }) => dispatch({ type: GET_ALL_SYSTEMS, systems: data }));
        };
    }
};
