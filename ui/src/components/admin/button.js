import React, { Component } from "react";

export default function Button({ children, style, onClick, size = null, styles = null }) {
    return (
        <button
            type="button"
            className={`btn btn-${style} ${size}`}
            onClick={onClick}
            style={styles}
        >
            {children}
        </button>
    );
}
