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
import {Loader} from './../shared/loader/loader.presentation';
import SocketContext from './../../services/socket/socketService';

class ChatScreenContainer extends React.Component {
    state={
        showLoader:true,
        skip:0,
        userInfo:null,
        message:null,
        messageContent:null
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
        if(this.props.chatList==null){
          console.log('chatlistnull')
          this.getChatList(this.state.skip);
        }
        else{
            this.setState({showLoader:false})
        }
        getUserInfo()
        .then((res)=>this.setState({userInfo:res},()=>{
          chatHistory(this.props.match.params.selectedUserId,0)
          .then((result)=>{
             let messageList=[];
             this.setState({message:result.data.chatHistory})
             // this.setState({message:result.data.chatHistory},()=>{
             let chatHistory=result.data.chatHistory;
             for(let i of chatHistory){
               let singleMessage={
                   _id:i._id, text:i.messageText,createdAt:i.createdAt,user:{
                   _id:i.sendByUser!=null?i.sendByUser._id:'',
                   userType:i.sendByUser!=null?i.sendByUser.userType:'',
                   name:i.sendByUser!=null?i.sendByUser.userType=='student'?i.sendByUser.firstName:'Mentor '+i.sendByUser.firstName:'',
                   avatar:i.sendByUser!=null?i.sendByUser.profilePicUrl:''
                 
                 }
               }
               messageList.push(singleMessage);
               }
               return messageList;
             // })
             })
           .then((result)=>this.props.historyMessageAdd(result))
           .catch((e)=>console.log('chat screen-history error',e))
         }))
        .catch((e)=>console.log(e))
      
       
    }//end


    //method to get chatlist
    getChatList=(skip)=>{
        chatList(skip)
        .then((response)=> this.props.getChatList(response.data))
        .then((res)=>this.setState({showLoader:false}))
        .catch((e)=>console.log(e))
       
    }

    onSend=()=> {
      let messages={};
    
      messages['token']=this.state.userInfo.token;
      messages['channelId']=this.props.match.params.selectedUserId;
      messages['user']['userType']=this.state.userInfo.userType;
      messages['user']['_id']=this.state.userInfo.userId;
      if(this.state.userInfo.userType=='mentor'){
        messages['user']['name']='Mentor '+this.state.userInfo.firstName;
      }
      else{
        messages['user']['name']=this.state.userInfo.firstName;
      }
      messages.createdAt=new Date().getTime();
      console.log(messages)
      // this.props.sendMessage(messages[0]);
      // socket.emit('channel-send-msg',messages[0]);
      // this.props.socketContext.socketState.socket.emit('channel-send-msg',this.state.messageContent)
    }

    messageText=(event)=>{
       this.setState({messageContent:event.target.value})
    }
    //rendering function
    render() {
        if(this.state.userInfo==null || this.state.message==null){
            return <Loader/>
        }
        return (
          <div className="container-fluid top-adjust">
                 <ChatScreenView 
                 onChange={this.messageText} 
                 sendMessage={this.onSend} 
                 userId={this.props.match.params.selectedUserId}
                 chatHistory={this.props.messages}
                 loggedInUserId={this.state.userInfo.userId}
                 getPrevPageView={this.goToPrevPage}
                 getNextPageView={this.goToNextPage}
                 showLoader={this.state.showLoader} 
                 chatList={this.props.chatList}/>
          </div>  
        );
      }
}


const withSocketContext = (Component) => {
  return (props) => (
       <SocketContext.Consumer>
          {(socketContext) => {
                    return <Component {...props} socketContext={socketContext} />
                }}
        </SocketContext.Consumer>
  )
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
export default connect(mapStateToProps, mapDispatchToProps)(withSocketContext(ChatScreenContainer));