import {connect} from "react-redux";
import Users from './Users';

let subscribeActionCreator = id => ({type: "SUBSCRIBE", idUser: id});
let unsubscribeActionCreator = id => ({type: "UNSUBSCRIBE", idUser: id});
let setUsersActionCreator = users => ({type: "SET_USERS", users: users});
let setCurrentPageAC = currentPage => ({type: "SET_CURRENT_PAGE", currentPage: currentPage});

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount
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
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        }
    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;