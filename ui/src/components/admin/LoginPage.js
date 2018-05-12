import React, { Component } from "react";

import Input from "./input";
import Button from "./button";

export default class LoginPage extends Component {
    state = {
        name: "gogamaga",
        password: "chatty35"
    };

    handleInput = ({ target }) => {
        const name = target.name;
        const value = target.value;
        this.setState(prevState => {
            prevState[name] = value;
            return prevState;
        });
    };

    render() {
        const { login, access } = this.props;
        const { name, password } = this.state;
        console.log(access);
        return (
            <div className="container-fluid">
                <div
                    className="row justify-content-md-center align-items-center"
                    style={{ height: "100vh" }}
                >
                    <div
                        className="col-md-6 col-lg-4 p-5 bg-light "
                        style={{ boxShadow: "0px 0px 14px 0px rgba(181,181,181,1)" }}
                    >
                        {!access && <span>Невірні логін або пароль</span>}
                        <Input label="Логин" name="name" onChange={this.handleInput} value={name} />
                        <Input
                            label="Пароль"
                            name="password"
                            onChange={this.handleInput}
                            value={password}
                        />
                        <Button onClick={() => login(this.state)}>Увійти</Button>
                    </div>
                </div>
            </div>
        );
    }
}
