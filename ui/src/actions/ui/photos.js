import {
    GET_RANDOM_PHOTO,
    GET_ALL_PHOTOS_FOR_UI,
    GET_MOUNTAINS_NAME_LIST_PHOTOS,
    GET_ONE_PHOTO_FOR_UI
} from "../../constants/ui";

import { photos } from "../../api/ui";

export const photosUIAction = {
    getRandomPhotos() {
        return function(dispatch) {
            return photos
                .getRandomPhoto()
                .then(({ data }) => dispatch({ type: GET_RANDOM_PHOTO, photos: data }));
        };
    },
    getAllPhotos() {
        return function(dispatch) {
            return photos
                .getAllPhotos()
                .then(({ data }) => dispatch({ type: GET_ALL_PHOTOS_FOR_UI, photos: data }));
        };
    },
    getMountainsNamePhotos() {
        return function(dispatch) {
            return photos
                .getMountainsNamePhotos()
                .then(({ data }) =>
                    dispatch({ type: GET_MOUNTAINS_NAME_LIST_PHOTOS, mountainsNameList: data })
                );
        };
    },
    getOneMountainPhotos(id) {
        return function(dispatch) {
            return photos
                .getOneMountainPhotos(id)
                .then(({ data }) => dispatch({ type: GET_ONE_PHOTO_FOR_UI, photos: data }));
        };
    }
};
