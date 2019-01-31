import React from 'react';
import HeaderView from './header.presentation';
import { logout } from './../../../services/apis/userManageApi';
import { withRouter } from 'react-router-dom';
import { deleteUserInfo } from '../../../session';
import { getUserInfo } from './../../../session';

class HeaderContainer extends React.Component {
    state = {
        isLoggedIn:false,
        // logoutStatus:false
    }
    componentDidMount() {
        getUserInfo()
        .then((response)=>response!=='none'?this.setState({isLoggedIn:true}):this.setState({isLoggedIn:false}))
    }
    // componentDidUpdate(){
    //   console.log(this.state.isLoggedIn)
    // }
    submitOnForm = () => {
        logout()
        .then((response)=>
            response.statusCode === 200 || response.statusCode === 201 || response.statusCode === 403 ?
             (this.props.history.push('/'),
             deleteUserInfo()):
            console.log("logout failed")
    )
        .catch((e)=>console.log(e));
    }
    render() {
        return (
            <HeaderView handleClick={this.submitOnForm} path={this.props.location.pathname}/>
        )
    }
}

export default withRouter(HeaderContainer);