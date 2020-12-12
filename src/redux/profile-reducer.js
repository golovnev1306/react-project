import {profileApi} from '../api/api';

const SET_USER_PROFILE_DATA = 'SET_USER_PROFILE_DATA';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE_DATA:
            return {
                ...state,
                userData: {...action.userData}
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    }
}

export const setUserProfileData = userData => ({type: "SET_USER_PROFILE_DATA", userData});
export const setStatus = status => ({type: "SET_STATUS", status});

export const getProfile = userId => {
    return (dispatch) => {
        profileApi.getProfile(userId).then((profileData) => {
            dispatch(setUserProfileData(profileData));
        });
    }
}

export default profileReducer;