import React from 'react';
import styles from './Content.module.css';
import {Route} from 'react-router-dom';
import About from './About/About';
import Main from "./Main/Main";
import NewsContainer from "./News/NewsContainer";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import Test from './Test/Test';

const Content = () => {
    return (
        <div className={styles.content}>
            <Route exact path='/' component={Main}/>
            <Route path='/about' component={About}/>
            <Route path='/news' render={ () => <NewsContainer/> } />
            <Route path='/users' render={ () => <UsersContainer/> } />
            <Route path='/profile/:userId' render={ () => <ProfileContainer/> } />
            <Route path='/test' component={Test}/>
        </div>
    );
}

export default Content;