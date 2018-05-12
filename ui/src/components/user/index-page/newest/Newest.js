import React, { Component } from "react";
import { Route } from "react-router-dom";

import NewestArticles from "./NewestArticles";

export default class Newest extends Component {
    componentDidMount() {
        this.props.getNewest();
    }

    render() {
        const { articles = [] } = this.props;
        return (
            <section class="newest">
                <h2>Найновіші</h2>
                <NewestArticles articles={articles} />
            </section>
        );
    }
}
