import React, { Component } from "react";

export default class PhotoViewig extends Component {
    state = {
        photoList: [],
        activePhotoIndex: 0
    };
    componentWillMount() {
        this.setState(prevState => {
            prevState.activePhotoIndex = this.props.photoList.findIndex(
                photo => photo.src === this.props.activePhotoSrc
            );
            prevState.photoList = this.props.photoList;
            return prevState;
        });
    }

    handleClickToPrevPhoto = () => {
        this.state.activePhotoIndex > 0 &&
            this.setState(prevState => {
                prevState.activePhotoIndex--;
                return prevState;
            });
    };
    handleClickToNextPhoto = () => {
        this.state.activePhotoIndex < this.state.photoList.length - 1 &&
            this.setState(prevState => {
                prevState.activePhotoIndex++;
                return prevState;
            });
    };

    render() {
        const { photoList, activePhotoIndex } = this.state;
        const { handleCloseViewing } = this.props;
        return (
            <div class="photo-view  photo-view_visible">
                <span class="photo-page__button-close" onClick={handleCloseViewing}>
                    x
                </span>
                <span class="photo-view__button-prev" onClick={this.handleClickToPrevPhoto} />
                <div class="photo-view__photo-container">
                    <span>
                        {photoList[activePhotoIndex].caption && (
                            <span class="photo-view__photo-container__caption">
                                {photoList[activePhotoIndex].caption}
                            </span>
                        )}
                        <img
                            src={photoList[activePhotoIndex].src}
                            alt=""
                            class="photo-view__photo-container__img"
                        />
                    </span>
                </div>
                <span class="photo-view__button-next" onClick={this.handleClickToNextPhoto} />
            </div>
        );
    }
}
