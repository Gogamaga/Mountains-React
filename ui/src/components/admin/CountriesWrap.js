import React, { Component } from "react";
import { Route } from "react-router-dom";

import Countries from "../../containers/admin/Countries";
import CreateCountries from "../../containers/admin/CreateCountries";

export default function CountriesWrap({ isFetching, match }) {
    return (
        <div>
            <Route exact path={`${match.path}`} component={Countries} />

            <Route path={`${match.path}/new`} component={CreateCountries} />
            <Route path={`${match.path}/edit/:id`} component={CreateCountries} />
        </div>
    );
}
