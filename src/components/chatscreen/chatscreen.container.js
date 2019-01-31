import React from 'react';
import {ChatScreenView} from './chatscreen.presentation';
import ChatListContainer from './../shared/chatlist/chatlist.container';
import SearchContainer from './../shared/search/search.container';
import { connect } from "react-redux";
import {getUserChatList} from './../../store/chatList/actions';
class ChatScreenContainer extends React.Component {

  
    render() {
        return (
          <div className="container-fluid top-adjust">
            <div className="row">
                <div className="col-lg-4 col-md-5 col-12 d-none d-md-block  box-decoration border ">
                    <SearchContainer/>
                    <ChatListContainer />
                </div>
                <div className="col-lg-8 col-md-7 box-decoration border">
                    <ChatScreenView />
                </div>
            </div>
          </div>  
        );
      }
}

const mapStateToProps = (state) => {
    // console.log('update')
    // console.log(state.chatListState.currentRoute,state.chatListState.chatList)
    return { 
      chatList: state.chatListState.chatList
     };
  };
  
  // Map dispatch function into props
  const mapDispatchToProps = (dispatch) => ({
    getChatList: list => {
      dispatch(getUserChatList(list))
    },
  }
  ); 
export default connect(mapStateToProps, mapDispatchToProps)(ChatScreenContainer);