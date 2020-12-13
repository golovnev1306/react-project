import React from 'react';
import {Field, reduxForm} from "redux-form";

class Login extends React.Component {
    onSubmitMyFunc = (values) => {
        console.log(values);
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
            <div><Field name='login' component='input' type='text' placeholder='input your login'/></div>
            <div><Field name='pass' component='input' type='text' placeholder='input your password'/></div>
            <div><Field name='rememberMe' component='input' type='checkbox'/> remember me</div>
            <button>Login</button>
        </form>
    );
}

const LoginFormRedux = reduxForm({
    form: 'login'
})(LoginForm);

export default Login;