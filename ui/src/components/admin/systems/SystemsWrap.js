import React, { Component } from "react";
import { Route } from "react-router-dom";

import SystemsList from "../../../containers/admin/systems/SystemsList";
import CreateSystem from "../../../containers/admin/systems/CreateSystem";

export default function SystemsWrap({ match }) {
    return (
        <div>
            <Route exact path={`${match.path}`} component={SystemsList} />

            <Route path={`${match.path}/new`} component={CreateSystem} />
            <Route path={`${match.path}/edit/:id`} component={CreateSystem} />
        </div>
    );
}
