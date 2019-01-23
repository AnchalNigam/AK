import { Switch, Route } from 'react-router-dom';
import React from 'react';
import LoginContainer from '../components/login/login.container';

export const Router = () => (
    <Switch>
      <Route exact path='/' component={LoginContainer}/>
      <Route exact path='/second' component={second}/>
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
  
