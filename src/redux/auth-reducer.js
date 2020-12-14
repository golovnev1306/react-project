import {authApi} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_IS_LOGIN = 'SET_USER_IS_LOGIN';
const USER_CLEAN = 'USER_CLEAN';

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
        case USER_CLEAN:
            return {
                userData: {
                    id: null,
                    login: null,
                    email: null
                },
                isLogin: false
            };
        default:
            return state;
    }
}

export const setUserData = (userData) => ({type: "SET_USER_DATA", userData: userData});
export const setUserIsLogin = (isLogin) => ({type: "SET_USER_IS_LOGIN", isLogin: isLogin});
export const userClean = () => ({type: "USER_CLEAN"});


export const getUser = () => {
    return (dispatch) => {
        return authApi.getUserData().then((userData) => {
            if (userData.resultCode === 0) {
                dispatch(setUserIsLogin(true));
                dispatch(setUserData(userData.data));
            } else {
                dispatch(setUserIsLogin(false));
            }
        });
    }
}

export const login = (email, password, rememberMe = false) => {
    return (dispatch) => {
        authApi.login(email, password, rememberMe).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(getUser());
            } else {
                if (response.data.messages?.[0]) {
                    dispatch(stopSubmit('login', {
                        _error: response.data.messages?.[0]
                    }));
                }
            }
        });
    }
}

export const unlogin = () => {
    return (dispatch) => {
        authApi.unlogin().then(()=> {
            dispatch(userClean());
        });
    }
}

export default authReducer;