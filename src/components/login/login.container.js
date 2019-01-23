import React from 'react';

class LoginForm extends React.Component {
    state = {
        username: "",
        password: "",
    };
    onFillUsername = event => {
        this.setState({
            username: event.target.value,
        });
    }
    onFillPassword = event => {
        this.setState({
            password: event.target.value,
        })
    }
}

export default LoginForm;