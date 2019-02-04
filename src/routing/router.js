import { Switch, Route,withRouter,Redirect } from 'react-router-dom';
import React from 'react';
import LoginContainer from '../components/login/login.container';
import ChatContainer from './../components/chat/chat.container';
import ChatScreenContainer from '../components/chatscreen/chatscreen.container';
import UserDetailsContainer from '../components/details/userdetails.container';
import Error404 from './../components/error/error.presentation';
import {getToken} from './..//services/authenticator/protectedroute'
import {ProtectedRoute} from './../services/authenticator/protectedroute';
export const Router = () => (
    <Switch>
      <Route exact path='/' render={()=>(getToken()==='none' || !getToken()?<LoginContainer/>:<Redirect to='/chat'/>)}/>
      <Route exact path='/second' component={second}/>
      <ProtectedRoute exact path='/chat' component={ChatContainer}/>/>
      <ProtectedRoute exact path='/:loggedInUser/chatscreen/:selectedUserId' component={withRouter(ChatScreenContainer)}/>
      <ProtectedRoute exact path='/list/:userType' component={withRouter(ChatContainer)}/>
      <ProtectedRoute exact path='/:userId/userdetails' component={withRouter(UserDetailsContainer)}/>
      <Route exact path='/*' component={withRouter(Error404)}/>
    </Switch>
)

// const Home=()=>(
//   <div className="text-warning">
//       ahagaagagaggg
//   </div>
// )

const second=()=>(
    <div className="text-warning">
        second link
    </div>
  )
  
// const ab=()=>(
   
// )

