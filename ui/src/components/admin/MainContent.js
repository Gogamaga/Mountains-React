import React, { Component } from "react";

import Button from "./button";

export default function MainContent({ children, active, heading }) {
    return (
        <div
            className={`tab-pane fade show ${active && "active"}`}
            id="article"
            role="tabpanel"
            aria-labelledby="article-tab"
        >
            <div className="row justify-content-between">
                <h2>{heading}</h2>
            </div>
            {children}
        </div>
    );
}
