import React from "react";
import axios from 'axios';
import styles from './users.module.css';

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items);
        });


    }

    setCurrentPageHandler = (pageNum) => {
        this.props.setCurrentPage(pageNum);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        this.pageCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        let pages = [];
        for (let i = 0; i < this.pageCount; i++) {
            pages.push(i + 1);
        }
        return (
            <div>
                <div>
                    {pages.map((pageNum) => {
                        return <span
                            className={`${(pageNum === this.props.currentPage) ? styles.active : ''} ${styles.item}`}
                        onClick={() => {
                            this.setCurrentPageHandler(pageNum);
                        }}
                        key={pageNum}>{pageNum}</span>
                    })}
                </div>
                {this.props.users.map(user => (<div key={user.id}>
                    <div>{user.name}</div>
                    <div>{'user.surname'}</div>
                    <div>{'user.location.country'}</div>
                    <div>{'user.location.sity'}</div>
                    <div>{user.status}</div>
                    <div>
                        {user.followed ?
                            <input type='button' onClick={() => {
                                this.props.unsubscribe(user.id);
                            }} value="unsubscribe"/> :
                            <input type='button' onClick={() => {
                                this.props.subscribe(user.id);
                            }} value="subscribe"/>}
                    </div>
                </div>))}
            </div>
        )
    }
}

export default Users;