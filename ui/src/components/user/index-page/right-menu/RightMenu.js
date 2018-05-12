import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";

import SystemList from "./SystemList";
import RandomVideoList from "./RandomVideoList";

export default class RightMenu extends Component {
    componentDidMount() {
        this.props.getAllSystem();
    }
    render() {
        const { systems } = this.props;
        return (
            <aside class="right-menu">
                {/* <h2>Меню</h2> */}
                <SystemList systemList={systems} />

                <div class="tags-list">
                    <h3>Теги</h3>
                    <span>#говерла</span>
                    <span>#еверест</span>
                    <span>#Канченджанґа</span>
                    <span>#Макалу</span>
                    <span>#Нангапарбат</span>
                </div>
                <RandomVideoList videoList={[1, 2, 2, 2, 2]} />
                <div class="table-mount-wrap">
                    <div class="clearfix">
                        <h3>Найвищі вершини Землі</h3>
                        <table class="table-mount table-mount__world">
                            <thead>
                                <tr>
                                    <th>Гора</th>
                                    <th>Висота</th>
                                    <th>Розташування</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Джомолунгма</th>
                                    <th>8848</th>
                                    <th>Гімалаї</th>
                                </tr>
                                <tr>
                                    <th>Еверест</th>
                                    <th>8848</th>
                                    <th>Гімалаї</th>
                                </tr>
                                <tr>
                                    <th>Еверест</th>
                                    <th>8848</th>
                                    <th>Гімалаї</th>
                                </tr>
                                <tr>
                                    <th>Еверест</th>
                                    <th>8848</th>
                                    <th>Гімалаї</th>
                                </tr>
                                <tr>
                                    <th>Еверест</th>
                                    <th>8848</th>
                                    <th>Гімалаї</th>
                                </tr>
                                <tr>
                                    <th>Еверест</th>
                                    <th>8848</th>
                                    <th>Гімалаї</th>
                                </tr>
                                <tr>
                                    <th>Еверест</th>
                                    <th>8848</th>
                                    <th>Гімалаї</th>
                                </tr>
                                <tr>
                                    <th>Еверест</th>
                                    <th>8848</th>
                                    <th>Гімалаї</th>
                                </tr>
                                <tr>
                                    <th>Еверест</th>
                                    <th>8848</th>
                                    <th>Гімалаї</th>
                                </tr>
                                <tr>
                                    <th>Еверест</th>
                                    <th>8848</th>
                                    <th>Гімалаї</th>
                                </tr>
                            </tbody>
                        </table>
                        <a class="button hvr-radial-out">Більше</a>
                    </div>
                    <div class="clearfix">
                        <h3>Найвищі вершини Карпат</h3>
                        <table class="table-mount table-mount__karpaty">
                            <thead>
                                <tr>
                                    <th>Гора</th>
                                    <th>Висота</th>
                                    <th>Розташування</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Говерла</th>
                                    <th>2061</th>
                                    <th>Карпати</th>
                                </tr>
                                <tr>
                                    <th>Еверест</th>
                                    <th>8848</th>
                                    <th>Гімалаї</th>
                                </tr>
                                <tr>
                                    <th>Еверест</th>
                                    <th>8848</th>
                                    <th>Гімалаї</th>
                                </tr>
                                <tr>
                                    <th>Еверест</th>
                                    <th>8848</th>
                                    <th>Гімалаї</th>
                                </tr>
                                <tr>
                                    <th>Еверест</th>
                                    <th>8848</th>
                                    <th>Гімалаї</th>
                                </tr>
                                <tr>
                                    <th>Еверест</th>
                                    <th>8848</th>
                                    <th>Гімалаї</th>
                                </tr>
                                <tr>
                                    <th>Еверест</th>
                                    <th>8848</th>
                                    <th>Гімалаї</th>
                                </tr>
                                <tr>
                                    <th>Еверест</th>
                                    <th>8848</th>
                                    <th>Гімалаї</th>
                                </tr>
                                <tr>
                                    <th>Еверест</th>
                                    <th>8848</th>
                                    <th>Гімалаї</th>
                                </tr>
                                <tr>
                                    <th>Еверест</th>
                                    <th>8848</th>
                                    <th>Гімалаї</th>
                                </tr>
                            </tbody>
                        </table>
                        <a class="button hvr-radial-out">Більше</a>
                    </div>
                </div>
            </aside>
        );
    }
}
