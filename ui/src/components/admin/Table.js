import React, { Component } from "react";

export default function Table({ children }) {
    return (
        <table className="table table-hover table-dark">
            <thead className="thead-dark">{children[0]}</thead>
            {children[1]}
        </table>
    );
}
