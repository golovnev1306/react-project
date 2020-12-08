import {combineReducers, createStore} from "redux";
import newsReducer from "./news-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
    newsPage: newsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    profilePage: profileReducer
});

let store = createStore(reducers);

window.store = store;

export default store;