import React from 'react';
import './login.presentation.css';
import LoginView from './login.presentation';

class LoginContainer extends React.Component {
    state = {
        userName: "",
        password: "",
    };
    validateName = name => {
        const regex = /[A-Za-z]{3,}/;
    
        return !regex.test(name)
          ? "The name must contain at least three letters. Numbers and special characters are not allowed."
          : "";
      };
    onFilluserName = event => {
        this.setState({
            userName: event.target.value,
        });
        console.log(this.state.userName)
    }
    onFillPassword = event => {
        this.setState({
            password: event.target.value,
        })
    }
    onUserNameBlur = () => {
        const { password } = this.state;
        console.log(password)
        const lastNameError = this.validateName(password);
         console.log(lastNameError)
        return this.setState({ lastNameError });
      };
    render() {
        return (
          <div className="form">
             <LoginView
              name="UserName"
              onChange={this.onFilluserName}
              onBlur={this.onUserNameBlur}
            />
             
          </div>
        );
      }
}

export default LoginContainer;