const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_IS_LOGIN = 'SET_USER_IS_LOGIN';

let initialState = {
    userData: {
        id: null,
        login: null,
        email: null
    },
    isLogin: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                userData: {...action.userData}
            };
        case SET_USER_IS_LOGIN:
            return {
                ...state,
                isLogin: action.isLogin
            };
        default:
            return state;
    }
}

export const setUserData = (userData) => ({type: "SET_USER_DATA", userData: userData});
export const setUserIsLogin = (isLogin) => ({type: "SET_USER_IS_LOGIN", isLogin: isLogin});

export default authReducer;