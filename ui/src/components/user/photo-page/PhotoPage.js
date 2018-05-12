import React, { Component } from "react";
import { Link, withRouter, NavLink } from "react-router-dom";

import MountainList from "../../../containers/ui/photo-page/MountainList";
import PhotoList from "./PhotoList";

import { sliceSubStringFromSearchLocation } from "../../../utils";

export default class PhotoPage extends Component {
    componentDidMount() {
        this.requestPhotoByLocationParams(this.props.location.search);
    }
    componentWillReceiveProps(nextProps) {
        nextProps.location.search !== this.props.location.search &&
            this.requestPhotoByLocationParams(nextProps.location.search);
    }
    requestPhotoByLocationParams(locationSearch) {
        !locationSearch
            ? this.props.getAllPhotos()
            : this.props.getOneMountainPhotos(sliceSubStringFromSearchLocation(locationSearch));
    }
    render() {
        const { photos = [] } = this.props;
        return (
            <div className="photo-page">
                <MountainList />
                <div className="photo-page__list">
                    {photos.map(photo => {
                        return <PhotoList photosMountain={photo} key={photo._id} />;
                    })}
                </div>
            </div>
        );
    }
}
