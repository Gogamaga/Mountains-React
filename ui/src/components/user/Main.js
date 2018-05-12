import React from "react";
import { Link, withRouter, NavLink, Route } from "react-router-dom";

import IndexPage from "./index-page/IndexPage";
import ArticlePage from "../../containers/ui/item-page/ArticlePage";
import KarpatyPage from "./karpaty-page";
import PhotoPage from "../../containers/ui/photo-page/PhotoPage";
import MountainsPage from "./mountain-page";

function Main({ match }) {
    return (
        <main className="main">
            <Route exact path={`${match.path}`} component={IndexPage} />
            <Route path={`${match.path}article/:id`} component={ArticlePage} />
            <Route path={`${match.path}karpaty`} component={KarpatyPage} />
            <Route path={`${match.path}photos`} component={PhotoPage} />
            <Route path={`${match.path}mountains`} component={MountainsPage} />
        </main>
    );
}

export default withRouter(Main);
