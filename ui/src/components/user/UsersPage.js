import React from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import "./bundle.css";

export default function UsersPage() {
    return (
        <div className="container-ui">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}
