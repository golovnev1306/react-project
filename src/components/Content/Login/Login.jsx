import React from 'react';
import {Field, reduxForm} from "redux-form";
import Input from "../../common/FormControls/Input";
import {required} from "../../../utils/validators";
import {connect} from "react-redux";
import {compose} from "redux";
import {login} from "../../../redux/auth-reducer";
import styles from './Login.module.css'

class Login extends React.Component {
    onSubmitMyFunc = (values) => {
        this.props.login(values.login, values.pass);
    }

    render = () => {
        return (
            <LoginFormRedux onSubmit={this.onSubmitMyFunc}/>
        );
    }
}

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field name='login' component={Input} type='text' placeholder='input your login' validate={[required]}/></div>
            <div><Field name='pass' component={Input} type='password' placeholder='input your password' validate={[required]}/></div>
            <div><Field name='rememberMe' component={Input} type='checkbox'/> remember me</div>
            { props.error && <div className={styles.commonError}>{props.error}</div>}
            <button>Login</button>
        </form>
    );
}


const LoginFormRedux = compose(reduxForm({form: 'login'}))(LoginForm);


export default connect(null, {login})(Login);