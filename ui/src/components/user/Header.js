import React, { Component } from "react";

import mount from "../../../src/mount.jpeg";

import Navigation from "./Navigation";

export default class Header extends Component {
    state = {
        headerTransition: false
    };

    componentDidMount() {
        window.addEventListener("scroll", e => {
            const headerNavigator = document.querySelector(".header-navigator");
            const headerBackground = document.querySelector(".header-background");
            headerBackground.style.opacity = 1 - window.pageYOffset / 1000 * 2;
            if (window.pageYOffset > 200) {
                this.setState({ headerTransition: true });
            } else {
                this.setState({ headerTransition: false });
            }
        });
    }

    render() {
        const { headerTransition } = this.state;
        return (
            <header>
                <img src={mount} className="header-background" alt="" />
                <Navigation headerTransition={headerTransition} />
            </header>
        );
    }
}
