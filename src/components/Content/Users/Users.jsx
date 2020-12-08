import React from "react";
import styles from './users.module.css';
import Preloader from '../../common/Preloader'


let Users = (props) => {
    let pageCount = Math.ceil(props.state.totalCount / props.state.pageSize);
    let pages = [];
    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1);
    }
    return (
        <div>
            {props.state.isFetching ? <Preloader /> : null}

            <div>
                {pages.map((pageNum) => {
                    return <span
                        className={`${(pageNum === props.state.currentPage) ? styles.active : ''} ${styles.item}`}
                        onClick={() => {
                            props.setCurrentPageHandler(pageNum);
                        }}
                        key={pageNum}>{pageNum}</span>
                })}
            </div>
            {props.state.users.map(user => (<div key={user.id} className={styles.userItem}>
                <div><img src={user.photos.small} alt=""/></div>
                <div><a href={`/profile/${user.id}`}>{user.name}</a></div>
                <div>{'user.surname'}</div>
                <div>{'user.location.country'}</div>
                <div>{'user.location.sity'}</div>
                <div>{user.status}</div>
                <div>
                    {user.followed ?
                        <input type='button' onClick={() => {
                            props.state.unsubscribe(user.id);
                        }} value="unsubscribe"/> :
                        <input type='button' onClick={() => {
                            props.state.subscribe(user.id);
                        }} value="subscribe"/>}
                </div>
            </div>))}
        </div>
    )
}

export default Users;