import React, { Component } from "react";
import Select from "react-select";

import Input from "../input";
import Button from "../button";
import { countries } from "../../../api/admin";

export default class CreateMountain extends Component {
    state = {
        mountain: {
            name: "",
            height: "",
            country: "",
            system: "",
            coordinates: {
                latitude: "",
                longitude: ""
            }
        },
        countries: [],
        systems: []
    };

    componentDidMount() {
        if (/edit/.test(this.props.match.url)) {
            this.props.getOneMountain(this.props.match.params.id);
        }
        this.props.getAllCountries();
        this.props.getAllSystems();
    }

    componentWillReceiveProps(nextProps) {
        if (/edit/.test(this.props.match.url)) {
            this.setState(prevState => {
                prevState.mountain = nextProps.editingMountain;
                return prevState;
            });
        }
        if (nextProps.editingMountain._id && /new/.test(nextProps.match.url)) {
            this.props.history.replace(
                this.props.match.url.replace(/new/, `edit/${nextProps.editingMountain._id}`)
            );
        }
        this.setState(prevState => {
            prevState.systems = nextProps.systems;
            prevState.countries = nextProps.countries;
        });
    }

    handleBackToList = () => {
        const backToList = this.props.match.url.split(/(\/new|\/edit)/)[0];
        this.props.backToList();
        this.props.history.push(backToList);
    };

    handleInput = ({ target }) => {
        const name = target.name;
        const value = target.value;
        this.setState(prevState => {
            if (name === "latitude" || name === "longitude") {
                prevState.mountain.coordinates[name] = value;
            } else {
                prevState.mountain[name] = value;
            }

            return prevState;
        });
    };

    handleSelect = selectedOption => {
        const name = selectedOption.name;
        const value = selectedOption.value;
        this.setState(prevState => {
            prevState.mountain[name] = value;
            return prevState;
        });
    };

    render() {
        const { name, height, coordinates, _id, country, system } = this.state.mountain;
        const { countries, systems } = this.state;
        const { save, editMountain } = this.props;
        return (
            <div className="container-fluid">
                <Button style={"primary"} onClick={this.handleBackToList}>
                    назад до списку
                </Button>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-8">
                        <h3>Створити гору</h3>
                        <Input value={name} onChange={this.handleInput} label="Назва" name="name" />
                        <Input
                            value={height}
                            onChange={this.handleInput}
                            label="Висота"
                            name="height"
                            type="number"
                        />
                        <div className="form-group">
                            <Select
                                options={countries.map(country => ({
                                    name: "country",
                                    value: country.name,
                                    label: country.name
                                }))}
                                onChange={this.handleSelect}
                                placeholder={"Країна"}
                                value={country}
                            />
                        </div>
                        <div className="form-group">
                            <Select
                                options={systems.map(system => ({
                                    name: "system",
                                    value: system.name,
                                    label: system.name
                                }))}
                                onChange={this.handleSelect}
                                placeholder={"Система"}
                                value={system}
                            />
                        </div>
                        <Input
                            value={coordinates.longitude}
                            onChange={this.handleInput}
                            label="Довгота"
                            name="longitude"
                        />
                        <Input
                            value={coordinates.latitude}
                            onChange={this.handleInput}
                            label="Широта"
                            name="latitude"
                        />
                        {_id ? (
                            <Button
                                style={"success"}
                                onClick={() => editMountain(_id, this.state.mountain)}
                            >
                                редагувати
                            </Button>
                        ) : (
                            <Button style={"success"} onClick={() => save(this.state.mountain)}>
                                зберегти
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
