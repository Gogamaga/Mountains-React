import moment from "moment";
import localeUk from "moment/locale/uk.js";

export function parseTimeStamp(time) {
    return moment(time)
        .locale("uk", localeUk)
        .format("LLL");
}

export function sliceSubStringFromSearchLocation(searchString) {
    const indexFrom = searchString.indexOf("=");
    return searchString.slice(indexFrom + 1);
}
