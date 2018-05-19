import {
    GET_RANDOM_PHOTO,
    GET_ALL_PHOTOS_FOR_UI,
    GET_MOUNTAINS_NAME_LIST_PHOTOS,
    GET_ONE_PHOTO_FOR_UI
} from "../../constants/ui";

export default function reducer(
    state = { randomPhotos: [], photos: [], mountainsNameList: [] },
    action
) {
    switch (action.type) {
        case GET_RANDOM_PHOTO:
            return {
                ...state,
                randomPhotos: action.photos
            };
        case GET_ALL_PHOTOS_FOR_UI:
            return {
                ...state,
                photos: action.photos
            };
        case GET_MOUNTAINS_NAME_LIST_PHOTOS:
            return {
                ...state,
                mountainsNameList: action.mountainsNameList
            };
        case GET_ONE_PHOTO_FOR_UI:
            return {
                ...state,
                photos: [action.photos]
            };
        default:
            return state;
    }
}
