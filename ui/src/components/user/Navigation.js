import React from "react";

import NavigationLink from "./NavigationLink";

export default function Navigation({ headerTransition }) {
    return (
        <nav className={`header-navigator ${headerTransition && "small"}`}>
            <div className="header-navigator__logo">
                <a href="">G</a>
            </div>
            <ul className="header-navigator__nav-list" style={{ marginBottom: 0 }}>
                <NavigationLink path="/" className={"header-navigator__nav-list-link"}>
                    головна
                </NavigationLink>
                <NavigationLink path="/mountains" className={"header-navigator__nav-list-link"}>
                    гори
                </NavigationLink>
                <NavigationLink path="/photos" className={"header-navigator__nav-list-link"}>
                    Фото
                </NavigationLink>
                <NavigationLink path="/d" className={"header-navigator__nav-list-link"}>
                    системи
                </NavigationLink>
                <NavigationLink
                    path="/karpaty"
                    className={
                        "header-navigator__nav-list-link header-navigator__nav-list-link__karpaty"
                    }
                >
                    Карпати
                </NavigationLink>
            </ul>
        </nav>
    );
}
