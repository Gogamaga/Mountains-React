import React, { Fragment } from "react";
import { Link, withRouter, NavLink } from "react-router-dom";

import { parseTimeStamp } from "../../../../utils";

export default function MostPopularArticles({ articles, header }) {
    return (
        <Fragment>
            <h2>{header}</h2>
            <ul class="most-popular__list list-articles">
                {articles.map(article => {
                    return (
                        <li class="most-popular__list-item list-articles__item" key={article._id}>
                            <Link to={`/article/${article._id}`}>
                                <div class="most-popular__list-item__text list-articles__text">
                                    {article.discription.length > 150
                                        ? article.discription.slice(0, 150) + "..."
                                        : article.discription}
                                </div>
                                <div class="most-popular__list-item__date list-articles__date">
                                    {parseTimeStamp(+article.create)}
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </Fragment>
    );
}
