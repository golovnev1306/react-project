import React from 'react';
import s from './Content.module.css';
import {Route} from 'react-router-dom';
import About from './About/About';
import Main from "./Main/Main";
import News from "./News/News";

const Content = (props) => {
    return (
        <div className={s.content}>
            <Route exact path='/' component={Main}/>
            <Route path='/about' component={About}/>
            <Route path='/News' render={() => <News state = {props.state.newsPage} /> }/>
        </div>
    );
}

export default Content;