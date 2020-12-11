import React from 'react';
import styles from './Sidebar.module.css';
import {Link} from 'react-router-dom';


const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div>
                <Link to='/'>Home</Link>
            </div>
            <div>
                <Link to='/about'>About</Link>
            </div>
            <div>
                <Link to='/news'>News</Link>
            </div>
            <div>
                <Link to='/users'>Users</Link>
            </div>
            <div>
                <Link to='/test'>Test</Link>
            </div>
        </div>
    );
}

export default Sidebar;