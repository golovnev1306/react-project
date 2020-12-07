const SUBSCRIBE = 'SUBSCRIBE';
const UNSUBSCRIBE = 'UNSUBSCRIBE';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

let initialState = {
    users: [],
    pageSize: 2,
    currentPage: 1,
    totalCount: 10
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
        default:
            return state;
    }
}

export default usersReducer;