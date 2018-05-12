import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { sliceSubStringFromSearchLocation } from "../../../utils";

export default class MountainList extends Component {
    componentDidMount() {
        this.props.getMountainsNamePhotos();
    }
    render() {
        const { mountainsNameList = [], location } = this.props;
        return (
            <div className="photo-page_mountain-list">
                <div className="clearfix">
                    <ul className="mountains-list">
                        {mountainsNameList.map(mountain => {
                            return (
                                <li
                                    className={`mountains-list__item ${sliceSubStringFromSearchLocation(
                                        location.search
                                    ) === mountain._id && "mountains-list__item__active"}`}
                                    key={mountain.mountainName.id}
                                >
                                    <NavLink
                                        to={{
                                            pathname: "/photos",
                                            search: `?mountain=${mountain._id}`
                                        }}
                                        href=""
                                    >
                                        {mountain.mountainName.name}
                                    </NavLink>
                                </li>
                            );
                        })}

                        <li
                            className={`mountains-list__item ${!location.search &&
                                "mountains-list__item__active"}`}
                        >
                            <NavLink
                                to={{
                                    pathname: "/photos"
                                }}
                            >
                                Всі
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
