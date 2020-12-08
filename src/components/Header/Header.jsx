import React from 'react';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>here header, hello {props.userData.login}</header>
    );
}

export default Header;