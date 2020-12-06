import newsReducer from "./news-reducer";
import {combineReducers, createStore} from "redux";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    newsPage: newsReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

export default store;