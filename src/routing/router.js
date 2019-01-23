import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Login from '../components/login/login.presentation';

export const Router = () => (
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route exact path='/second' component={second}/>
    </Switch>
)

const Home=()=>(
  <div className="text-warning">
      ahagaagagaggg
  </div>
)

const second=()=>(
    <div className="text-warning">
        second link
    </div>
  )
  
