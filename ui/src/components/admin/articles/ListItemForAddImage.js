import React, { Component } from "react";

import Input from "../input";
import Button from "../button";

import "../style.css";

export default class ListItemForAddImage extends Component {
    state = {
        dropdownMenuVisibility: false
    };

    handleDropdownMenuVisibility = e => {
        this.setState(prevState => {
            return {
                dropdownMenuVisibility: !prevState.dropdownMenuVisibility
            };
        });
    };

    render() {
        const {
            onChangeFile,
            id,
            onChange,
            valueSrc,
            valueCaption,
            removeFromArticle
        } = this.props;
        const { dropdownMenuVisibility } = this.state;
        return (
            <div className="row" style={{ padding: 5, borderBottom: "solid 1px #ced4da" }}>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <button
                            className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            onClick={this.handleDropdownMenuVisibility}
                        >
                            Dropdown
                        </button>
                        <div className={`dropdown-menu ${dropdownMenuVisibility ? "show" : ""}`}>
                            <a className="dropdown-item" href="#" onClick={removeFromArticle}>
                                Видалити зі статті
                            </a>
                            <a className="dropdown-item" href="#">
                                Видалити назавжди
                            </a>
                            <div role="separator" className="dropdown-divider" />

                            <input type="file" name="image" id="file" onChange={onChangeFile} />
                        </div>
                    </div>
                    <input
                        type="text"
                        name="fotos"
                        data-id={id}
                        data-fotokey="src"
                        value={valueSrc}
                        className="form-control"
                        aria-label="Text input with dropdown button"
                        placeholder="введіть посилання або завантажте зображення"
                        onChange={onChange}
                    />
                </div>
                <input
                    type="text"
                    name="fotos"
                    data-id={id}
                    value={valueCaption}
                    data-fotokey="caption"
                    className="form-control"
                    aria-label="Text input with dropdown button"
                    placeholder="введіть опис до фото"
                    onChange={onChange}
                />
                {valueSrc && (
                    <div className="col-lg-4 col-md-4" style={{ paddingTop: 5 }}>
                        <img src={valueSrc} className="img-fluid" alt="Responsive image" />
                    </div>
                )}
            </div>
        );
    }
}
