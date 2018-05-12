import { ACTIVE_LINK } from "../../constants/admin";

export default function reducer(state = "article", action) {
    switch (action.type) {
        case ACTIVE_LINK:
            return action.link;

        default:
            return state;
    }
}
