import React from "react";
import randomInt from "random-int";

export default function RandomPhotoMountains({ randomPhoto }) {
    return (
        <div class="random-photo-mount">
            <h3>Фото</h3>
            {randomPhoto.map((photo, index) => {
                return (
                    <div key={photo.fotos[0].id + index}>
                        <span class="short-text-block random-photo-mount__name">
                            {photo.mountainName.name}
                        </span>
                        <img src={photo.fotos[0].src} alt="" />
                    </div>
                );
            })}
        </div>
    );
}
