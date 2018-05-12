import React, { Component } from "react";
import shortid from "shortid";

import Select from "react-select";

import TextArea from "../textArea";
import Button from "../button";
import Input from "../input";
import ListItemForAddImage from "./ListItemForAddImage";

import "react-select/dist/react-select.css";

export default class CreateArticle extends Component {
    state = {
        article: {
            name: "",
            mountain: "",
            discription: "",
            fotos: []
        },
        selectMountain: null
    };

    componentDidMount() {
        if (/edit/.test(this.props.match.url)) {
            this.props.getOneArticle(this.props.match.params.id);
        }
        this.props.getAllMountains();
    }

    componentWillReceiveProps(nextProps) {
        if (/edit/.test(this.props.match.url)) {
            this.setState(prevState => {
                prevState.article = nextProps.editingArticle;
                return prevState;
            });
        }
        if (nextProps.editingArticle._id && /new/.test(nextProps.match.url)) {
            this.props.history.replace(
                this.props.match.url.replace(/new/, `edit/${nextProps.editingArticle._id}`)
            );
        }
    }

    handleSelect = valueSelect => {
        this.setState(prevState => {
            prevState.article.mountain = valueSelect;

            return prevState;
        });
    };
    handleAddItemToArrayFotos = () => {
        this.setState(prevState => {
            prevState.article.fotos.push({ id: shortid.generate(), src: "", caption: "" });
            return prevState;
        });
    };
    // handleUploadFile = (e, id) => {
    //     const file = e.target.files[0];
    //     articles.uploadImage(file).then(({ data }) => {
    //         this.setState(prevState => {
    //             prevState.article.fotos = prevState.article.fotos.map(foto => {
    //                 if (foto.id === id) {
    //                     foto.src = data;
    //                 }
    //                 return foto;
    //             });
    //             return prevState;
    //         });
    //     });
    // };
    handleInput = ({ target }) => {
        const name = target.name;
        const value = target.value;
        this.setState(prevState => {
            if (name === "fotos") {
                const id = target.dataset.id;
                const fotokey = target.dataset.fotokey;
                prevState.article.fotos = prevState.article.fotos.map(foto => {
                    if (foto.id === id) {
                        foto[fotokey] = value;
                    }
                    return foto;
                });
            } else {
                prevState.article[name] = value;
            }
            return prevState;
        });
    };
    removeFromArticle = (e, id) => {
        this.setState(prevState => {
            prevState.article.fotos = prevState.article.fotos.filter(foto => foto.id !== id);
            return prevState;
        });
    };

    handleBackToList = () => {
        const backToList = this.props.match.url.split(/(\/new|\/edit)/)[0];
        this.props.backToList();
        this.props.history.push(backToList);
    };

    render() {
        const {
            selectMountain,
            article,
            article: { name, discription, fotos = [], mountain, _id }
        } = this.state;
        const { mountains, saveArticle, editArticle } = this.props;
        return (
            <div className="container-fluid">
                <Button style={"primary"} onClick={this.handleBackToList}>
                    назад до списку
                </Button>
                <div className="row">
                    <div className="col-lg-5 col-md-5">
                        <Input
                            value={name}
                            label={"Заголовок"}
                            onChange={this.handleInput}
                            name={"name"}
                        />
                        <TextArea
                            value={discription}
                            label={"Текст статті"}
                            onChange={this.handleInput}
                            name={"discription"}
                            row="10"
                        />
                        <div className="form-group">
                            <Select
                                options={mountains.map(mountain => ({
                                    id: mountain._id,
                                    name: mountain.name,
                                    label: mountain.name
                                }))}
                                onChange={this.handleSelect}
                                placeholder={"Гора"}
                                value={mountain}
                            />
                        </div>
                        {_id ? (
                            <Button onClick={() => editArticle(_id, article)} style={"success"}>
                                редагувати
                            </Button>
                        ) : (
                            <Button onClick={() => saveArticle(article)} style={"success"}>
                                зберегти
                            </Button>
                        )}
                    </div>
                    <div className="col-lg-7 col-md-7">
                        <h5>Фото</h5>
                        {fotos.map(foto => (
                            <ListItemForAddImage
                                onChangeFile={e => this.handleUploadFile(e, foto.id)}
                                key={foto.id}
                                id={foto.id}
                                onChange={this.handleInput}
                                valueSrc={foto.src}
                                valueCaption={foto.caption}
                                removeFromArticle={e => this.removeFromArticle(e, foto.id)}
                            />
                        ))}
                        <Button onClick={this.handleAddItemToArrayFotos} styles={{ marginTop: 15 }}>
                            додати
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}
