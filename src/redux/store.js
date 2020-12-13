import {applyMiddleware, combineReducers, createStore} from "redux";
import newsReducer from "./news-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import profileReducer from "./profile-reducer";
import {reducer as formReducer} from 'redux-form';
import thunkMiddleWare from 'redux-thunk';

let reducers = combineReducers({
    newsPage: newsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    profilePage: profileReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;