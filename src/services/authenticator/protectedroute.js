import React from 'react';
import {Route, Redirect} from 'react-router-dom';


export function getToken(){
   return localStorage.getItem('userInfo') || 'none';   
}

export const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      getToken() !== 'none' || !getToken()
        ? <Component {...props} />
        : <Redirect to='/' />
    )} />
  )
  