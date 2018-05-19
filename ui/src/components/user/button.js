import React from "react";

export default function Button({ children, onClick }) {
    return (
        <a class="button hvr-radial-out" onClick={onClick}>
            {children}
        </a>
    );
}
