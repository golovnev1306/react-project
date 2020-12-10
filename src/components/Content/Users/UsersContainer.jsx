import {connect} from "react-redux";
import React from 'react';
import {
    getUsers,
    setCurrentPage,
    subscribe,
    unsubscribe
} from "../../../redux/users-reducer";


import Users from "./Users";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    setCurrentPageHandler = (pageNum) => {
        this.props.setCurrentPage(pageNum);
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    render() {
        return <Users state={{...this.props}}
                      setCurrentPageHandler={this.setCurrentPageHandler}/>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps,
    {subscribe, unsubscribe, setCurrentPage, getUsers})(UsersContainer);