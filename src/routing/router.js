import { Switch, Route,withRouter } from 'react-router-dom';
import React from 'react';
import LoginContainer from '../components/login/login.container';
import ChatContainer from './../components/chat/chat.container';
import ChatScreenContainer from '../components/chatscreen/chatscreen.container';
import UserDetailsContainer from '../components/details/userdetails.container';

export const Router = () => (
    <Switch>
      <Route exact path='/' component={LoginContainer}/>
      <Route exact path='/second' component={second}/>
      <Route exact path='/chat' component={ChatContainer}/>
      <Route exact path='/chatscreen' component={withRouter(ChatScreenContainer)}/>
      <Route exact path='/list/:userType' component={withRouter(ChatContainer)}/>
      <Route exact path='/:userId/userdetails' component={withRouter(UserDetailsContainer)}/>
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
  
