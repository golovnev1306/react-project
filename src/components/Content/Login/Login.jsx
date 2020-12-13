import React from 'react';
import {Field, reduxForm} from "redux-form";
import Input from "../../common/FormControls/Input";
import {maxLength, required} from "../../../utils/validators";

const maxLength10 = maxLength(10);

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
            <div><Field name='login' component={Input} type='text' placeholder='input your login' validate={[required, maxLength10]}/></div>
            <div><Field name='pass' component={Input} type='password' placeholder='input your password' validate={[required]}/></div>
            <div><Field name='rememberMe' component={Input} type='checkbox'/> remember me</div>
            <button>Login</button>
        </form>
    );
}

const LoginFormRedux = reduxForm({
    form: 'login'
})(LoginForm);

export default Login;