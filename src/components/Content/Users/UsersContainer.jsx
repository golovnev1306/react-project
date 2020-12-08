import {connect} from "react-redux";
import React from 'react';
import * as axios from 'axios';
import {setCurrentPage, setUsers, subscribe, toggleIsFetching, unsubscribe} from "../../../redux/users-reducer";
import Users from "./Users";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        this.props.setUsers([]);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items);
            this.props.toggleIsFetching(false);
        });
    }

    setCurrentPageHandler = (pageNum) => {
        this.props.setCurrentPage(pageNum);
        this.props.toggleIsFetching(true);
        this.props.setUsers([]);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items);
            this.props.toggleIsFetching(false);
        });
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
    {subscribe, unsubscribe, setUsers, setCurrentPage, toggleIsFetching})(UsersContainer);