import React, { Component } from 'react';
import HeaderContainer from './components/shared/header/header.container';
import {Router} from './routing/router';
import Footer from './components/shared/footer/footer.presentation';
import './App.css';
import SocketContext from './services/socket/socketService'
import { Switch, Route,withRouter } from 'react-router-dom';

// import Login from './components/login/login.presentation';
class App extends Component {
  state = {
     socket:null,
     updation:0
  };

  componentDidMount(){
    console.log('mount')
  }
  updateSocketValue = (key, val) => {
    console.log('updated')
    this.setState({[key]: val});
   }
  // //  // comment out the below to re-render on every click
   shouldComponentUpdate(nextProps, nextState) {
     console.log(this.state.updation)
     console.log(nextState.updation)
     return this.state.updation != nextState.updation;
    // return this.state.updation != nextState.updation || this.props.location.pathname !== nextProps.location.pathname;;
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
    console.log('rerender app')
    console.log(this.props.location)
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
