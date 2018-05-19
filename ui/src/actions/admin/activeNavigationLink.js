import { ACTIVE_LINK } from "../../constants/admin";

export default function(link) {
    return {
        type: ACTIVE_LINK,
        link
    };
}
