import React, { Component } from "react";

import Input from "../input";
import Button from "../button";

export default class CreateSystem extends Component {
    state = {
        system: {}
    };

    componentDidMount() {
        if (/edit/.test(this.props.match.url)) {
            this.props.getOneSystem(this.props.match.params.id);
            this.setState(prevState => {
                prevState.system = this.props.editingSystem;
                return prevState;
            });
        }
    }
    componentWillReceiveProps(nextProps) {
        if (/edit/.test(nextProps.match.url)) {
            this.setState(prevState => {
                prevState.system = nextProps.editingSystem;
                return prevState;
            });
        }
        if (nextProps.editingSystem._id && /new/.test(nextProps.match.url)) {
            this.props.history.replace(
                this.props.match.url.replace(/new/, `edit/${nextProps.editingSystem._id}`)
            );
        }
    }

    handleBackToList = () => {
        this.props.history.goBack();
    };

    handleInput = ({ target }) => {
        this.setState(prevState => {
            prevState.system.name = target.value;
            return prevState;
        });
    };

    render() {
        const { name, _id } = this.state.system;
        const { saveSystem, edit } = this.props;
        return (
            <div className="container-fluid">
                <Button style={"primary"} onClick={this.handleBackToList}>
                    назад до списку
                </Button>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-8">
                        <h3>Створити систему</h3>
                        <Input value={name || ""} onChange={this.handleInput} />
                        {_id ? (
                            <Button style={"success"} onClick={() => edit(_id, this.state.system)}>
                                редагувати
                            </Button>
                        ) : (
                            <Button style={"success"} onClick={() => saveSystem(this.state.system)}>
                                зберегти
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
