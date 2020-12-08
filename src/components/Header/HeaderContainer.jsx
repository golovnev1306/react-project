import React from 'react';
import {connect} from 'react-redux';
import Header from "./Header";
import {setUserData, setUserIsLogin} from "../../redux/auth-reducer";
import * as axios from 'axios';

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true //опция для разрешения CORP
        }).then((response) => {

            if (response.data.resultCode === 0) {
                this.props.setUserIsLogin(true);
                this.props.setUserData(response.data.data);
            } else {
                this.props.setUserIsLogin(false);
            }
        });
    }

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

export default connect(mapStateToProps, {setUserData, setUserIsLogin})(HeaderContainer);