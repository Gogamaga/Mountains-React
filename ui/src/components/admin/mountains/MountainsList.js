import React, { Component } from "react";

import { parseTimeStamp } from "../../../utils";

import Table from "../Table";
import Tbody from "../Tbody";
import Button from "../button";
import Loading from "../Loading";

export default class MountainsList extends Component {
    componentDidMount() {
        this.props.getAllMountains();
    }

    handleAddNewMountain = () => {
        this.props.history.push(`${this.props.location.pathname}/new`);
    };
    handleEditMountain = id => {
        this.props.history.push(`${this.props.location.pathname}/edit/${id}`);
    };

    render() {
        const { mountains, isFetching, deleteOneMountain } = this.props;
        return (
            <div>
                <Button style={"primary"} onClick={this.handleAddNewMountain}>
                    додати
                </Button>
                {isFetching ? (
                    <Loading />
                ) : (
                    <Table>
                        {
                            <tr>
                                <th scope="col">Назва</th>
                                <th scope="col">Система</th>
                                <th scope="col">Країна</th>
                                <th scope="col">Висота</th>
                                <th scope="col">Кординати</th>
                                <th scope="col">Дата створення</th>
                                <th scope="col" />
                                <th scope="col" />
                            </tr>
                        }
                        <Tbody>
                            {mountains.map(mountain => {
                                return (
                                    <tr key={mountain._id}>
                                        <td>{mountain.name}</td>
                                        <td>{mountain.system}</td>
                                        <td>{mountain.country}</td>
                                        <td>{mountain.height}</td>
                                        <td>
                                            {`д:${mountain.coordinates.longitude}
                                          ш:${mountain.coordinates.latitude}`}
                                        </td>
                                        <td>{parseTimeStamp(+mountain.create)}</td>
                                        <td>
                                            <Button
                                                style={"success"}
                                                onClick={() =>
                                                    this.handleEditMountain(mountain._id)
                                                }
                                                size={"btn-sm"}
                                            >
                                                редагувати
                                            </Button>
                                        </td>
                                        <td>
                                            <Button
                                                style={"danger"}
                                                size={"btn-sm"}
                                                onClick={() => deleteOneMountain(mountain._id)}
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
