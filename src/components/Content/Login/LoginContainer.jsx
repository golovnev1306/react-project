import Login from "./Login";
import React from "react";


class LoginContainer extends React.Component
{
    onSubmitMyFunc = () => {
        console.log('im here');
    }

    render() {
        return (
            <Login onSubmitMyFunc={this.onSubmitMyFunc}/>
        );
    }
}

export default LoginContainer;
