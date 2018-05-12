import React, { Component } from "react";
import { Route } from "react-router-dom";

import MountainsList from "../../../containers/admin/mountains/MountainsList";
import CreateMountain from "../../../containers/admin/mountains/CreateMountain";

export default function MountainsWrap({ match }) {
    return (
        <div>
            <Route exact path={`${match.path}`} component={MountainsList} />

            <Route path={`${match.path}/new`} component={CreateMountain} />
            <Route path={`${match.path}/edit/:id`} component={CreateMountain} />
        </div>
    );
}
