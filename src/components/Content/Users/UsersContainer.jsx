import {connect} from "react-redux";
import React from 'react';
import {
    getUsersRequest,
    setCurrentPage,
    subscribe,
    unsubscribe
} from "../../../redux/users-reducer";
import {compose} from 'redux';


import Users from "./Users";
import withRedirect from "../../../hoc/withRedirect";
import {
    getCurrentPage,
    getIsFetching,
    getPageSize,
    getTotalCount,
    getUsers
} from "../../../redux/selectors/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersRequest(this.props.currentPage, this.props.pageSize);
    }

    setCurrentPageHandler = (pageNum) => {
        this.props.setCurrentPage(pageNum);
        this.props.getUsersRequest(this.props.currentPage, this.props.pageSize);
    }

    render() {
        return <Users state={{...this.props}}
                      setCurrentPageHandler={this.setCurrentPageHandler}/>
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        isFetching: getIsFetching(state)
    }
}



export default compose(
    withRedirect,
    connect(mapStateToProps, {subscribe, unsubscribe, setCurrentPage, getUsersRequest})
)(UsersContainer);