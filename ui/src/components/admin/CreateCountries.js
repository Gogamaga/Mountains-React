import React, { Component } from "react";

import Input from "./input";
import Loading from "./Loading";
import Button from "./button";

export default class CreateCountries extends Component {
    state = {
        country: this.props.editingCountry
    };

    handleInput = ({ target }) => {
        this.setState(prevState => {
            prevState.country.name = target.value;
            return prevState;
        });
    };

    componentDidMount() {
        /edit/.test(this.props.match.url) && this.props.getOneCountry(this.props.match.params.id);
    }

    componentWillReceiveProps(nexprops) {
        this.setState(
            prevState => ({ ...prevState, country: nexprops.editingCountry }),
            () => {
                if (nexprops.editingCountry._id && /new/.test(nexprops.match.url)) {
                    this.props.history.replace(
                        this.props.match.url.replace(/new/, `edit/${nexprops.editingCountry._id}`)
                    );
                }
            }
        );
    }
    handleBackToList = () => {
        this.props.history.goBack();
    };

    render() {
        const { isFetching, backToList, save, edit } = this.props;
        const { name, _id } = this.state.country;
        return (
            <div className="container-fluid">
                <Button style={"primary"} onClick={this.handleBackToList}>
                    назад до списку
                </Button>
                <div className="row justify-content-center">
                    {isFetching ? (
                        <Loading />
                    ) : (
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <h3>Створити Країну</h3>
                            <Input value={name || ""} onChange={this.handleInput} />
                            {_id ? (
                                <Button
                                    style={"success"}
                                    onClick={() => edit(_id, this.state.country)}
                                >
                                    редагувати
                                </Button>
                            ) : (
                                <Button style={"success"} onClick={() => save(this.state.country)}>
                                    зберегти
                                </Button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
