import React from "react";

export default function TextArea({ value, onChange, label, name, row = "3" }) {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <textarea
                className="form-control"
                id={name}
                rows={row}
                value={value}
                name={name}
                onChange={onChange}
            />
        </div>
    );
}
