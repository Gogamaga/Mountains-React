import React, { Component } from "react";

import { parseTimeStamp } from "../../utils";

import Table from "./Table";
import Tbody from "./Tbody";
import Button from "./button";
import Loading from "./Loading";

export default class Countries extends Component {
    componentDidMount() {
        this.props.getAllCountries();
    }

    handleAddNewCountry = () => {
        this.props.addNew();
        this.props.history.push(`${this.props.location.pathname}/new`);
    };

    handleEditCountry = id => {
        this.props.history.push(`${this.props.location.pathname}/edit/${id}`);
    };

    render() {
        const { countries, isFetching } = this.props.countries;
        const { addNew, deleteOne } = this.props;
        return (
            <div>
                <Button style={"primary"} onClick={this.handleAddNewCountry}>
                    додати
                </Button>
                {isFetching ? (
                    <Loading />
                ) : (
                    <Table>
                        {
                            <tr>
                                <th scope="col">Назва</th>
                                <th scope="col">Дата створення</th>
                                <th scope="col" />
                                <th scope="col" />
                            </tr>
                        }
                        <Tbody>
                            {countries.map(country => {
                                return (
                                    <tr key={country._id}>
                                        <td>{country.name}</td>
                                        <td>{parseTimeStamp(+country.create)}</td>
                                        <td>
                                            <Button
                                                style={"success"}
                                                onClick={() => this.handleEditCountry(country._id)}
                                                size={"btn-sm"}
                                            >
                                                редагувати
                                            </Button>
                                        </td>
                                        <td>
                                            <Button
                                                style={"danger"}
                                                size={"btn-sm"}
                                                onClick={() => deleteOne(country._id)}
                                            >
                                                видалити
                                            </Button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </Tbody>
                    </Table>
                )}
            </div>
        );
    }
}
