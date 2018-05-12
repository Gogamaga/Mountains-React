import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { CookiesProvider, withCookies } from "react-cookie";

import "./index.css";
import App from "./App";
import UsersPage from "./components/user/UsersPage";
import registerServiceWorker from "./registerServiceWorker";

import store from "./store";
const A = withCookies(App);
ReactDOM.render(
    <CookiesProvider>
        <Provider store={store}>
            <Router>
                <div>
                    <A />
                    {/* <UsersPage /> */}
                </div>
            </Router>
        </Provider>
    </CookiesProvider>,
    document.getElementById("root")
);
registerServiceWorker();
