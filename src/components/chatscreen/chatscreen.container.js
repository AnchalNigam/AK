import React from 'react';
import {ChatScreenView} from './chatscreen.presentation';
import { connect } from "react-redux";
import {chatList} from './../../services/apis/chatApi';
import {chatHistory} from './../../services/apis/chatApi';
import {addMessage} from './../../store/message/actions'
import {resetMessage} from './../../store/message/actions'
import {historyMessage} from './../../store/message/actions'
import {historyMessageAppend} from './../../store/message/actions';
import {activeChannel} from './../../store/message/actions'
import {resetChannel} from './../../store/message/actions';
import {getUserChatList} from './../../store/chatList/actions';
import {getUserInfo} from './../../session';

class ChatScreenContainer extends React.Component {
    state={
        showLoader:true,
        skip:0,
        userInfo:null,
        message:null
    }
    goToPrevPage = () => {
        if(this.state.skip === 0) {
          console.log("EOP")
        } else {
          this.setState({skip:this.state.skip-1, showLoader:true}, () =>{
            this.getChatList(this.state.skip);
          });
        }
      }
    //gotonext page for pagination
    goToNextPage = () => {
        this.setState({skip:this.state.skip+1,showLoader:true},()=>{
          this.getChatList(this.state.skip);
        });
    }

    //mount lifecycle call
    componentDidMount(){
        console.log('mount')
        getUserInfo()
        .then((res)=>this.setState({userInfo:res}))
        .catch((e)=>console.log(e))
        if(this.props.chatList==null){
          console.log('chatlistnull')
          this.getChatList(this.state.skip);
        }
        else{
            this.setState({showLoader:false})
        }
        chatHistory(this.props.match.params.selectedUserId,0)
        .then((res)=> this.setState({message:res.data.chatHistory})          
        )
       .then((result)=>this.props.historyMessageAdd(result.data.chatHistory))
       .catch((e)=>console.log('chat screen-history error',e))
    }//end


    //method to get chatlist
    getChatList=(skip)=>{
        chatList(skip)
        .then((response)=> this.props.getChatList(response.data))
        .then((res)=>this.setState({showLoader:false}))
        .catch((e)=>console.log(e))
       
    }
    //rendering function
    render() {
        console.log(this.props.messages)
        if(this.state.userInfo==null || this.state.message==null){
            return null
        }
        return (
          <div className="container-fluid top-adjust">
                 <ChatScreenView userId={this.props.match.params.selectedUserId} chatHistory={this.props.messages} loggedInUserId={this.state.userInfo.userId} getPrevPageView={this.goToPrevPage} getNextPageView={this.goToNextPage} showLoader={this.state.showLoader} chatList={this.props.chatList}/>
          </div>  
        );
      }
}

const mapStateToProps = state => {
    return {
         messages: state.messageState.messages,
         chatList: state.chatListState.chatList
     };
};
  
  // Map dispatch function into props
const mapDispatchToProps = (dispatch) => ({
    getChatList: list => {
        dispatch(getUserChatList(list))
      },
    sendMessage: message => {
      dispatch(addMessage(message))
    },
    resetState:()=>{
      dispatch(resetMessage())
    },
    historyMessageAdd:message=>{
      dispatch(historyMessage(message))
    },
    historyMessageAppend:message=>{
      dispatch(historyMessageAppend(message))
  
    },
    setActiveChannel:id=>{
      dispatch(activeChannel(id))
  
    },
    resetActiveChannel:()=>{
      dispatch(resetChannel())
  
    }
}); 
export default connect(mapStateToProps, mapDispatchToProps)(ChatScreenContainer);