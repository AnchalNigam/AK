import React from 'react';
import LoginForm from './login.container';

const Login = () => (
    <input type="text" name="user-name" placeholder="Username" onChange={LoginForm.onFillUsername}/>
    <input type="text" name="user-name" placeholder="Username" onChange={LoginForm.onFillUsername}/>
)

export default Login;