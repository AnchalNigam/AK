import React from 'react';
import './login.presentation.css';
import LoginView from './login.presentation';
import {CarouselView} from './login.presentation';
import {LogoView} from './login.presentation';
import {ButtonView} from './login.presentation';
import {login} from './../../services/apis/userManageApi';
import {saveUserDetail} from './../../session';
import {getUserInfo} from './../../session';

class LoginContainer extends React.Component {
    state = {
        userName: "",
        password: "",
        error:'',
        isLoading:false
    };
    
    componentDidMount() {
        console.log("mounted login")
        getUserInfo()
        .then((response)=>(response!=='none'&&response!==null)?this.props.history.push('/chat'):null)
        .catch((error)=>console.log(error))
    }
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
    showAndHide(){
        setTimeout(
            document.getElementById('error').classList.replace('anim', 'no-show'),
            console.log("here")
        ,5000)
    }
    submitForm = () => {
       this.setState({isLoading:true})
       let data={
           email:this.state.userName,
           password:this.state.password
       }
       login(data)
       .then((response)=>{
        
        (response.statusCode === 201 || response.statusCode ===200) ?
           saveUserDetail(response.data)
           .then((res)=>{
               this.setState({isLoading:false})
               this.props.history.push('/chat')
           })
           .catch((e) => console.log(e)) 
            :
            this.setState({error:response.message,isLoading:false})
       })
       .catch((e)=>console.log('error',e))
       
    }
    check=()=>{
       if(this.state.error!==''){
           this.setState({error:''})
       }
    }
    render() {
        console.log("rerender")
        console.log(this.state.error)
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
                            onKeyDown={this.check}
                        />
                        <LoginView
                            type="password"
                            label="Password"
                            name="Password"
                            onChange={this.onFillPassword}
                        />
                        <div className="col-12 text-center">
                            <div className="anim">
                                {this.state.error}
                            </div>
                        {this.state.isLoading===true?
                            <div className="lds-dual-ring"></div>    
                        :
                        <div className="lds-dual-ring no-show"></div>
                        }
                        </div>
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