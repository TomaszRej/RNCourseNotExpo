import {ADD_PLACE, DELETE_PLACE} from './actionTypes';

export const addPlace = (placeName, location,image) => {
    // return {
    //     type: ADD_PLACE,
    //     placeName: placeName,
    //     location: location,
    //     image: image
    // };

    return dispatch => {
        const placeData = {
            name: placeName,
            location: location
        };

        fetch('https://rncoursenotexpo.firebaseio.com/places.json',{
            method: 'POST',
            body: JSON.stringify(placeData)
        })
            .catch(err=> console.log(err))
            .then(res => res.json())
            .then(parseRes => {
                console.log(parseRes);
            })
    };
};
export const deletePlace = (key) => {
    return {
        type: DELETE_PLACE,
        placeKey: key
    }
};
