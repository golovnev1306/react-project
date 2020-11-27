import React from 'react';
import s from './Content.module.css';
import {Route} from 'react-router-dom';
import About from './About/About';
import Main from "./Main/Main";
import News from "./News/News";

const Content = () => {
    return (
        <div className={s.content}>
            <Route exact path='/' component={Main}/>
            <Route path='/about' component={About}/>
            <Route path='/News' component={News}/>
        </div>
    );
}

export default Content;