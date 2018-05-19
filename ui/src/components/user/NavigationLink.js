import React from "react";
import { Link, withRouter, NavLink } from "react-router-dom";

export default function NavigationLink({ children, path, className }) {
    return (
        <li>
            <NavLink
                exact
                to={path}
                className={className}
                activeClassName="header-navigator__nav-list-link_active"
            >
                {children}
            </NavLink>
        </li>
    );
}
