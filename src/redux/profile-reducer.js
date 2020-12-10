import {profileApi} from '../api/api';

const SET_USER_PROFILE_DATA = 'SET_USER_PROFILE_DATA';

let initialState = {

};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE_DATA:
            return {
                ...state,
                userData: {...action.userData}
            };
        default:
            return state;
    }
}

export const setUserProfileData = (userData) => ({type: "SET_USER_PROFILE_DATA", userData: userData});
export const getProfile = (userId) => {
    return (dispatch) => {
        profileApi.getProfile(userId).then((profileData) => {
            dispatch(setUserProfileData(profileData));
        });
    }
}

export default profileReducer;