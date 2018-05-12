import React from "react";

export default function ArticlePagePhotoContainer({ photos, onClick }) {
    return (
        <div className="item-page__photo-container">
            {photos.slice(0, 3).map((photo, index) => {
                return (
                    <div key={photo.id}>
                        {index === 2 && (
                            <div className="item-page__photo-container__img-cover">
                                <span className="item-page__photo-container__img-cover__amount">
                                    {photos.length} фото
                                </span>
                            </div>
                        )}
                        <img
                            src={photo.src}
                            alt=""
                            className="item-page__photo-container__img"
                            onClick={onClick}
                        />
                    </div>
                );
            })}
        </div>
    );
}
