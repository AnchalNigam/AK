import React from 'react';
import HeaderView from './header.presentation';
import {logout} from './../../../services/apis/userManageApi';
import { withRouter } from 'react-router-dom';
import { deleteUserInfo } from '../../../session';

class HeaderContainer extends React.Component {
    submitOnForm = () => {
        logout()
        .then((response)=>
            response.statusCode === 200 || response.statusCode === 201 || response.statusCode === 403 ?
             (this.props.history.push('/'),
             deleteUserInfo() ):
            console.log("logout failed")
    )
        .catch((e)=>console.log(e));
    }
    render() {
        return (
            <HeaderView handleClick={this.submitOnForm}/>
        )
    }
}

export default withRouter(HeaderContainer);