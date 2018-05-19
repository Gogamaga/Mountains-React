import React from "react";
import { Link, withRouter } from "react-router-dom";

import NavigationLink from "./NavigationLink";

function Navigation({ activeLink, onClickNavigation, location }) {
    return (
        <ul className="nav nav-tabs" id="myTab" role="tablist">
            <Link to="/admin/dashboard/articles" style={{ textDecoration: "none" }}>
                <NavigationLink
                    name={"articles"}
                    activeLink={/articles/.test(location.pathname)}
                    onClick={onClickNavigation}
                >
                    Статті
                </NavigationLink>
            </Link>
            <Link to="/admin/dashboard/mountains" style={{ textDecoration: "none" }}>
                <NavigationLink
                    name={"mountains"}
                    activeLink={/mountains/.test(location.pathname)}
                    onClick={onClickNavigation}
                >
                    Гори
                </NavigationLink>
            </Link>
            <Link to="/admin/dashboard/systems" style={{ textDecoration: "none" }}>
                <NavigationLink
                    name={"systems"}
                    activeLink={/system/.test(location.pathname)}
                    onClick={onClickNavigation}
                >
                    Системи
                </NavigationLink>
            </Link>
            <Link to="/admin/dashboard/countries" style={{ textDecoration: "none" }}>
                <NavigationLink
                    name={"countries"}
                    activeLink={/countries/.test(location.pathname)}
                    onClick={onClickNavigation}
                >
                    Країни
                </NavigationLink>
            </Link>
        </ul>
    );
}

export default withRouter(Navigation);
