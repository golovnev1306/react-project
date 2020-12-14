import {getUser} from "./auth-reducer";

const INITIAL_APP_SUCCESS = 'INITIAL_APP_SUCCESS';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';

const initialState = {
    isInitialized: false,
    isFetching: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIAL_APP_SUCCESS:
            return {...state, isInitialized: true}
        case TOGGLE_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state;
    }
}

const initialAppSuccess = () => ({type: INITIAL_APP_SUCCESS});
const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching});

const initializeApp = () => {
    return (dispatch) => {
        dispatch(getUser()).then(() => {
            dispatch(initialAppSuccess());
        });
    }
};

export {appReducer, initializeApp, toggleFetching};