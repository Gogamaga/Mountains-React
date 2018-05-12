import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import MainContent from "./MainContent";
import ArticleWrap from "./articles/ArticleWrap";
import CountriesWrap from "../../containers/admin/CountriesWrap";
import SystemsWrap from "../../containers/admin/systems/SystemsWrap";
import MountainsWrap from "./mountains/MountainsWrap";

export default function Main({ activeLink, editArticle, match }) {
    return (
        <div className="tab-content" id="myTabContent">
            <MainContent active={true} heading={"Статті"}>
                <Route path={`${match.url}/articles`} component={ArticleWrap} />
                <Route path={`${match.path}/countries`} component={CountriesWrap} />
                <Route path={`${match.path}/systems`} component={SystemsWrap} />
                <Route path={`${match.path}/mountains`} component={MountainsWrap} />
            </MainContent>
        </div>
    );
}
