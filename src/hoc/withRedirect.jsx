import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        isLogin: state.auth.isLogin
    }
}

const withRedirect = (Component) => {
    return connect(mapStateToProps)((props) => {
        if (!props.isLogin) {
            return <Redirect to='/login'/>;
        }

        return (
            <Component {...props}/>
        )
    })
}

export default withRedirect;