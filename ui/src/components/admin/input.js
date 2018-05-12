import React from "react";

export default function Input({ value, onChange, type = "text", label, placeholder, name }) {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                className="form-control form-control-sm"
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}
