import React, { Component } from "react";

import spiner from "../../spinner.gif";

export default function Loading() {
    return (
        <div
            className="row justify-content-md-center align-items-center"
            style={{ height: "80vh" }}
        >
            <img src={spiner} alt="...loading" />
        </div>
    );
}
