import React from 'react';
import {ChatScreenView} from './chatscreen.presentation';
import ChatListContainer from './../shared/chatlist/chatlist.container';
import SearchContainer from './../shared/search/search.container';
class ChatScreenContainer extends React.Component {
  
    render() {
        return (
          <div className="container-fluid top-adjust">
            <div className="row">
                <div className="col-lg-4 col-md-5 col-12 d-none d-md-block  box-decoration border ">
                    <SearchContainer/>
                    <ChatListContainer/>
                </div>
                <div className="col-lg-8 col-md-7 box-decoration border">
                    <ChatScreenView/>
                </div>
            </div>
          </div>  
        );
      }
}

export default ChatScreenContainer;