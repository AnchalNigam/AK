import { Switch, Route } from 'react-router-dom';
import React from 'react';

export const Router = () => (
    <Switch>
      <Route exact path='/' component={Home}/>
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
  
