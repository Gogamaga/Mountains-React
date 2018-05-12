import { combineReducers } from "redux";

import activeNavigationLink from "./admin/activeNavigationLink";
import articles from "./admin/articles";
import mountains from "./admin/mountains";
import countriesApi from "./admin/countriesApi";
import systems from "./admin/systems";
import autorization from "./admin/autorization";
import users from "./admin/users";
//UI
import articlesUI from "./ui/articles";
import photosUI from "./ui/photos";
import systemsUI from "./ui/systems";

export default combineReducers({
    activeNavigationLink,
    articles,
    mountains,
    countriesApi,
    systems,
    users,
    articlesUI,
    photosUI,
    systemsUI
});
