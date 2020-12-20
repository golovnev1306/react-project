import React from 'react';
import s from './Header.module.css';
import {Link} from 'react-router-dom';

const Header = ({state:{isLogin, unlogin, userData}}) => {
    //debugger
    return (
        <header className={s.header}>here header
            {isLogin && `, hello ${userData.login}`}
            {isLogin && <button onClick={unlogin}>Unlogin</button>}
            {!isLogin && <Link to='/login'><button style={{marginLeft: "20px"}}>login</button></Link>}
        </header>
    );
}

export default Header;