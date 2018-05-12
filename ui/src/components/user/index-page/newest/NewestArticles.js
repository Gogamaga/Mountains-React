import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { parseTimeStamp } from "../../../../utils";

import Button from "../../button";

function NewestArticles({ articles, history }) {
    function handleClickGoArticle(id) {
        history.push(`/article/${id}`);
    }
    return (
        <Fragment>
            {articles.map(article => {
                return (
                    <div class="newest-item clearfix" key={article._id}>
                        <img src={article.fotos[0].src} alt="" class="newest-item__image" />
                        <div class="newest-item__info">
                            <span class="newest-item__date short-text-block">
                                {parseTimeStamp(+article.create)}
                            </span>
                            <p class="newest-item__text">{article.name}</p>
                        </div>
                        <Button onClick={() => handleClickGoArticle(article._id)}>
                            Детальніше
                        </Button>

                        <span class="newest-item__view ">
                            <i class="fas fa-eye" />
                            {article.views}
                        </span>
                    </div>
                );
            })}
        </Fragment>
    );
}

export default withRouter(NewestArticles);
