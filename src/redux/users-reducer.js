const SUBSCRIBE = 'SUBSCRIBE';
const UNSUBSCRIBE = 'UNSUBSCRIBE';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case (SUBSCRIBE):
            return {
                ...state,
                users: state.users.map((user) => {
                    if (action.idUser === user.id) {
                        return {...user, subscribed: true}
                    }
                    return user;
                })
            };
        case (UNSUBSCRIBE):
            return {
                ...state,
                users: state.users.map((user) => {
                    if (action.idUser === user.id) {
                        return {...user, subscribed: false}
                    }
                    return user;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export default usersReducer;