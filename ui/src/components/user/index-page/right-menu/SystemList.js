import React from "react";
import { Link } from "react-router-dom";

export default function SystemList({ systemList }) {
    return (
        <div class="clearfix">
            <ul class="mountains-list">
                {systemList.map(system => {
                    return (
                        <li class="mountains-list__item">
                            <Link to="/">{system.name}</Link>
                        </li>
                    );
                })}
            </ul>
            <a class="button hvr-radial-out">Більше</a>
        </div>
    );
}
