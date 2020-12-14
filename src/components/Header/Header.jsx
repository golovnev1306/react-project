import React from 'react';
import s from './Header.module.css';
import {Link} from 'react-router-dom';

const Header = (props) => {
    //debugger
    return (
        <header className={s.header}>here header
            {props.state.isLogin && `, hello ${props.state.userData.login}`}
            {props.state.isLogin && <button onClick={props.state.unlogin}>Unlogin</button>}
            {!props.state.isLogin && <Link to='/login'><button style={{marginLeft: "20px"}}>login</button></Link>}
        </header>
    );
}

export default Header;