import React, { Component } from "react";

export default function NavigationLink({ onClick, children, name, activeLink }) {
    function handlerOnClick() {
        onClick(name);
    }
    return (
        <li className="nav-item">
            <span
                className={`nav-link ${activeLink && "active"}`}
                id="article-tab"
                data-toggle="tab"
                href="#article"
                role="tab"
                aria-controls="article"
                aria-selected="true"
                onClick={handlerOnClick}
            >
                {children}
            </span>
        </li>
    );
}
