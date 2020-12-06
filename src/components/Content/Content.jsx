import React from 'react';
import s from './Content.module.css';
import {Route} from 'react-router-dom';
import About from './About/About';
import Main from "./Main/Main";
import NewsContainer from "./News/NewsContainer";
import UsersContainer from "./Users/UsersContainer";

const Content = () => {
    return (
        <div className={s.content}>
            <Route exact path='/' component={Main}/>
            <Route path='/about' component={About}/>
            <Route path='/news' render={ () => <NewsContainer/> } />
            <Route path='/users' render={ () => <UsersContainer/> } />
        </div>
    );
}

export default Content;