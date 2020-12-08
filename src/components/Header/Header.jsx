import React from 'react';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>here header{props.state.isLogin ? ', hello {props.state.userData.login}' :
            <button style={{marginLeft: "20px"}}>login</button>}
        </header>
    );
}

export default Header;