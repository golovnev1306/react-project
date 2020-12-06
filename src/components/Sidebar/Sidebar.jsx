import React from 'react';
import s from './Sidebar.module.css';
import {Link} from 'react-router-dom';


const Sidebar = () => {
    return (
        <div className={s.sidebar}>
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
        </div>
    );
}

export default Sidebar;