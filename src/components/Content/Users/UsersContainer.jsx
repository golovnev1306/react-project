import {connect} from "react-redux";
import Users from './Users';

let subscribeActionCreator = id => ({type: "SUBSCRIBE", idUser: id});
let unsubscribeActionCreator = id => ({type: "UNSUBSCRIBE", idUser: id});
let setUsersActionCreator = users => ({type: "SET_USERS", users: users});

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        subscribe: (idUser) => {
            dispatch(subscribeActionCreator(idUser));
        },
        unsubscribe:(idUser) => {
            dispatch(unsubscribeActionCreator(idUser));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        }
    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;