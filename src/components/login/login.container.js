import React from 'react';
import './login.presentation.css';
import LoginView from './login.presentation';
import {CarouselView} from './login.presentation';
import {LogoView} from './login.presentation';
import {ButtonView} from './login.presentation';
import {login} from './../../services/apis/userManageApi';
import {saveUserDetail} from './../../session';

class LoginContainer extends React.Component {
    state = {
        userName: "",
        password: "",
        error:''
    };

    onFilluserName = event => {
        this.setState({
            userName: event.target.value,
        });
    }
    onFillPassword = event => {
        this.setState({
            password: event.target.value,
        })
    }
    
    submitForm=()=>{
       let data={
           email:this.state.userName,
           password:this.state.password
       }
       login(data)
       .then((response)=>saveUserDetail(response.data),this.props.history.push('/chat'))
       .catch((e)=>console.log('error',e))
    }
    
    render() {
        return (
         <div className="container-fluid">
             <div className="row mt-5">
                <div className="col-lg-6 col-md-6 d-none d-md-block">
                   <CarouselView/>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <LogoView/>
                    <div className="row">
                        <LoginView
                            type="text"
                            label="UserName"
                            name="UserName"
                            onChange={this.onFilluserName}
                        />
                        <LoginView
                            type="password"
                            label="Password"
                            name="Password"
                            onChange={this.onFillPassword}
                        />
                        <ButtonView click={this.submitForm}/>
                    </div>
                </div>
                {/* column end */}
             </div>
             {/* row end */}
         </div>
        );
      }
}

export default LoginContainer;