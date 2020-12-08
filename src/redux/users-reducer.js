const SUBSCRIBE = 'SUBSCRIBE';
const UNSUBSCRIBE = 'UNSUBSCRIBE';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
    users: [],
    pageSize: 2,
    currentPage: 1,
    totalCount: 10,
    isFetching: false
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case (SUBSCRIBE):
            return {
                ...state,
                users: state.users.map((user) => {
                    if (action.idUser === user.id) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            };
        case (UNSUBSCRIBE):
            return {
                ...state,
                users: state.users.map((user) => {
                    if (action.idUser === user.id) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;

    }
}

export const subscribe = id => ({type: "SUBSCRIBE", idUser: id});
export const setUsers = users => ({type: "SET_USERS", users: users});
export const setCurrentPage = currentPage => ({type: "SET_CURRENT_PAGE", currentPage: currentPage});
export const unsubscribe = id => ({type: "UNSUBSCRIBE", idUser: id});
export const toggleIsFetching = (isFetching) => ({type: "TOGGLE_IS_FETCHING", isFetching: isFetching});

export default usersReducer;