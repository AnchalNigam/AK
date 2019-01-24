import { Switch, Route } from 'react-router-dom';
import React from 'react';
import LoginContainer from '../components/login/login.container';
import ChatContainer from './../components/chat/chat.container';
import ChatScreenContainer from '../components/chatscreen/chatscreen.container';

export const Router = () => (
    <Switch>
      <Route exact path='/' component={LoginContainer}/>
      <Route exact path='/second' component={second}/>
      <Route exact path='/chat' component={ChatContainer}/>
      <Route exact path='/chatscreen' component={ChatScreenContainer}/>

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
  
