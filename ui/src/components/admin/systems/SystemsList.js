import React, { Component } from "react";

import { parseTimeStamp } from "../../../utils";

import Table from "../Table";
import Tbody from "../Tbody";
import Button from "../button";
import Loading from "../Loading";

export default class SystemsList extends Component {
    componentDidMount() {
        this.props.getAllSystems();
    }

    handleAddNewSystem = () => {
        this.props.addNew();
        this.props.history.push(`${this.props.location.pathname}/new`);
    };

    handleEditSystem = id => {
        this.props.history.push(`${this.props.location.pathname}/edit/${id}`);
    };

    render() {
        const { systems, isFetching, deleteOne } = this.props;
        return (
            <div>
                <Button style={"primary"} onClick={this.handleAddNewSystem}>
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
                            {systems.map(system => {
                                return (
                                    <tr key={system._id}>
                                        <td>{system.name}</td>
                                        <td>{parseTimeStamp(+system.create)}</td>
                                        <td>
                                            <Button
                                                style={"success"}
                                                onClick={() => this.handleEditSystem(system._id)}
                                                size={"btn-sm"}
                                            >
                                                редагувати
                                            </Button>
                                        </td>
                                        <td>
                                            <Button
                                                style={"danger"}
                                                size={"btn-sm"}
                                                onClick={() => deleteOne(system._id)}
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
