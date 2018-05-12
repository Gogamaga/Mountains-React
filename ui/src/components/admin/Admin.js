import React, { Component } from "react";
import { Route } from "react-router-dom";

import Navigator from "../../containers/admin/Navigation";
import Main from "../../containers/admin/Main";

export default function Admin() {
    return (
        <div className={"container-fluid"}>
            <div className="col-lg-12">
                <Navigator />
                <Main />
            </div>
        </div>
    );
}
