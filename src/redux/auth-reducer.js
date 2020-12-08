const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userData: {
        id: null,
        login: null,
        email: null
    }
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                userData: {...action.userData}
            };
        default:
            return state;
    }
}

export const setUserData = (userData) => ({type: "SET_USER_DATA", userData: userData});

export default authReducer;