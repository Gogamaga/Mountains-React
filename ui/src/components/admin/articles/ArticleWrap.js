import React from "react";
import { Route } from "react-router-dom";

import ArticleList from "../../../containers/admin/articles/ArticleList";
import CreateArticle from "../../../containers/admin/articles/CreateArticle";

export default function ArticleWrap({ match }) {
    return (
        <div>
            <Route exact path={`${match.path}`} component={ArticleList} />

            <Route path={`${match.path}/new`} component={CreateArticle} />
            <Route path={`${match.path}/edit/:id`} component={CreateArticle} />
        </div>
    );
}
