import React, { Component, Fragment } from "react";

export default function RandomVideoList({ videoList }) {
    return (
        <div class="random-video-list">
            <h3>Відео</h3>
            {videoList.map(video => {
                return (
                    <div class="video-container">
                        <iframe
                            src=""
                            frameborder="0"
                            allow="autoplay; encrypted-media"
                            allowfullscreen
                        />
                    </div>
                );
            })}
        </div>
    );
}
