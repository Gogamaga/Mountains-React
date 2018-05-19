import React, { Component } from "react";

export default function ToolTip({ active, children }) {
    return <span className={"tooltip-response"}>{children}</span>;
}
