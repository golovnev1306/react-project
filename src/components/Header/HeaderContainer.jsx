import React from 'react';
import {connect} from 'react-redux';
import Header from "./Header";
import {unlogin} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    render = () => {
        return (
            <Header state={{...this.props}}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        userData: state.auth.userData,
        isLogin: state.auth.isLogin
    }
}

export default connect(mapStateToProps, {unlogin})(HeaderContainer);