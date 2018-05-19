import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";

import MostPopular from "../../../containers/ui/index-page/most-popular/MostPopular";
import Newest from "../../../containers/ui/index-page/newest/Newest";
import RightMenu from "../../../containers/ui/index-page/right-menu/RightMenu";

export default function IndexPage() {
    return (
        <Fragment>
            <MostPopular />
            <Newest />
            <RightMenu />
        </Fragment>
    );
}
