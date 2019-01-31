import React, { Component } from 'react';
import HeaderContainer from './components/shared/header/header.container';
import {Router} from './routing/router';
import Footer from './components/shared/footer/footer.presentation';
import './App.css';
import SocketContext from './services/socket/socketService'
import { Switch, Route,withRouter } from 'react-router-dom';
import {a} from "./services/socket/listenSocket";

// import Login from './components/login/login.presentation';
class App extends Component {
  state = {
     socket:null,
     updation:0
  };

  componentDidMount(){
  }

  updateSocketValue = (key, val) => {
    this.setState({[key]: val});
   }

  // comment out the below to re-render on every click
   shouldComponentUpdate(nextProps, nextState) {
    //  return this.state.updation != nextState.updation;
    return this.state.updation != nextState.updation || this.props.location.pathname !== nextProps.location.pathname;;
  }

  // componentWillUpdate(nextProps, nextState) {
  //   console.log('updated yes')
  //   console.log(nextProps,nextState)
  // }
  // componentDidUpdate(prevProps, prevState,){
  //   console.log('yes')
  //   console.log(prevProps,prevState)
  // }

  render() {
    console.log('rerenser app')
    if(this.state.socket!=null){
      console.log('yess')
        a(this.state.socket)
    }
    return (
      <div className="col-12 nopad">
        <HeaderContainer />
        <div className="set-height">
          <SocketContext.Provider value={{socketState:this.state,updateSocketValue: this.updateSocketValue}}>
            <Router/>
            
          </SocketContext.Provider>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(App);

