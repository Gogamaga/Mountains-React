import React, { Component } from "react";

import { parseTimeStamp } from "../../../utils";

import Table from "../Table";
import Tbody from "../Tbody";
import Button from "../button";
import Loading from "../Loading";

export default class ArticleList extends Component {
    componentDidMount() {
        this.props.getAll();
    }
    handleDeleteArticle(id) {
        this.props.deleteOne(id);
    }

    handleAddNewMountain = () => {
        const location = this.props.location.pathname;
        const newLocation = location.endsWith("/") ? location + "new" : location + "/new";
        this.props.history.push(newLocation);
    };
    handleEditArticle = id => {
        const location = this.props.location.pathname;
        const newLocation = location.endsWith("/")
            ? location + `edit/${id}`
            : location + `/edit/${id}`;
        this.props.history.push(newLocation);
    };

    render() {
        const { isFetching, articles = [] } = this.props;
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
                                <th scope="col">Гора</th>
                                <th scope="col">Перегляди</th>
                                <th scope="col">Дата створення</th>
                                <th scope="col" />
                                <th scope="col" />
                            </tr>
                        }

                        <Tbody>
                            {articles.map(
                                ({
                                    _id,
                                    name,
                                    views,
                                    create,
                                    mountain: { name: mountainName }
                                }) => {
                                    return (
                                        <tr scope="row" key={_id}>
                                            <td scope="row">{name}</td>
                                            <td>{mountainName}</td>
                                            <td>{views}</td>
                                            <td>{parseTimeStamp(+create)}</td>
                                            <td>
                                                <Button
                                                    style={"success"}
                                                    onClick={() => this.handleEditArticle(_id)}
                                                >
                                                    редагувати
                                                </Button>
                                            </td>
                                            <td>
                                                <Button
                                                    style={"danger"}
                                                    onClick={() => this.handleDeleteArticle(_id)}
                                                >
                                                    видалити
                                                </Button>
                                            </td>
                                        </tr>
                                    );
                                }
                            )}
                        </Tbody>
                    </Table>
                )}
            </div>
        );
    }
}
