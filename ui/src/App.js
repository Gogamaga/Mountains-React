import React, { Component } from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import logo from "./logo.svg";

import Admin from "./components/admin/Admin";
import UsersPage from "./components/user/UsersPage";
import LoginPage from "./containers/admin/LoginPage";

class App extends Component {
    render() {
        const { cookies } = this.props;
        console.log(this.props.location.pathname);
        return (
            //THIS ROUTE NEED FIX
            <div className="App">
                {!/admin/.test(this.props.location.pathname) ? (
                    <Route path={"/"} component={UsersPage} />
                ) : (
                    <Route
                        path="/admin"
                        render={() => {
                            if (!cookies.get("token")) {
                                // if token is not exist
                                return <Redirect to="/admin/login" />;
                            } else {
                                if (
                                    this.props.location.pathname === "/admin/login" || // change to regex
                                    this.props.location.pathname === "/admin"
                                ) {
                                    return <Redirect to="/admin/dashboard/articles" />;
                                } else {
                                    return <Route path="/admin/dashboard" component={Admin} />;
                                }
                            }
                        }}
                    />
                )}
                <Route exact path="/admin/login" component={LoginPage} />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        ownProps: ownProps.cookies.get("token")
    };
}

export default withRouter(connect(mapStateToProps)(App));
