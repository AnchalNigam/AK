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
const urls=require("config/" + (process.env.REACT_APP_STAGE==='dev'?'development':'production') + ".js");
const io = require('socket.io-client/dist/socket.io');
const shortid = require('shortid');
class ChatScreenContainer extends React.Component {
    state={
        showLoader:true,
        skip:0,
        userInfo:null,
        message:null,
        messageContent:'',
        loadEarlierMsg:false,

    }
    
    componentWillMount(){ 
      
    //   const socket = io(urls.chatUrl, {
    //   reconnection: true,
    //   reconnectionDelay: 500,
    //   reconnectionAttempts: Infinity, 
    //   transports: ['websocket'],
    //   });
    //  // const socket="anchal"
    //   this.props.socketContext.updateSocketValue('socket',socket);
    //   this.props.socketContext.updateSocketValue('updation',1);

      let data={
        "channelId":this.props.match.params.selectedUserId,
        "userId":this.props.match.params.loggedInUser,
        "readAt":new Date().getTime()
      }
      // if(this.props.socketContext.socketState.updation===1){
        this.props.socketContext.socketState.socket.emit('subscribe',data.userId)
        this.props.socketContext.socketState.socket.emit('read-message',data)
        this.props.resetState();
      // }
  
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
        this.props.setActiveChannel(this.props.match.params.selectedUserId);
    }//end

    // componentWillReceiveProps(recProps) {
    //   console.log('props receve',recProps)
    //    if(recProps.messages.length!=0){
    //     if(recProps.messages[0].channelId===this.props.match.params.selectedUserId){
    //       // if(!this.state.loadEarlierMsg){
    //       //   this.setState((prevState, props) => ({
    //       //     totalMsgCount: prevState.totalMsgCount + 1
    //       //   })); 
      
    //       // }
    //       let data={
    //         "channelId":this.props.match.params.selectedUserId,
    //         "userId":this.props.match.params.loggedInUser,
    //         "readAt":new Date().getTime()
    //       }
    //       this.props.socketContext.socketState.socket.emit('read-message',data)
    //      }
    //    }
       
    // }

    //method to get chatlist
    getChatList=(skip)=>{
        chatList(skip)
        .then((response)=> this.props.getChatList(response.data))
        .then((res)=>this.setState({showLoader:false}))
        .catch((e)=>console.log(e))
       
    }
    //method when user sends message
    onSend=()=> {
      let message={};
      message.user={};
      message['token']=this.state.userInfo.token;
      message['channelId']=this.props.match.params.selectedUserId;
      message['user']['userType']=this.state.userInfo.userType;
      message['user']['_id']=this.state.userInfo.userId;
      if(this.state.userInfo.userType=='mentor'){
        message['user']['name']='Mentor '+this.state.userInfo.firstName;
      }
      else{
        message['user']['name']=this.state.userInfo.firstName;
      }
      message['_id']=shortid.generate();
      message['user']['avatar']=null;
      message.text=this.state.messageContent;
      message.createdAt=new Date().getTime();
      this.props.sendMessage(message);
      this.props.socketContext.socketState.socket.emit('channel-send-msg',message);
      this.clearText();
    }
    
    messageText=(event)=>{
       this.setState({messageContent:event.target.value})
    }

    //methd to clear textbox after send
    clearText=()=>{
      console.log('clear text')
      this.setState({messageContent:''})
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

    //component unmount
    componentWillUnmount() {
      console.log('unmount chatscreen')
      this.props.resetActiveChannel();
     }

    //rendering function
    render() {
        if(this.state.userInfo==null || this.state.message==null){
            return <Loader/>
        }
        return (
          <div className="container-fluid top-adjust">
                 <ChatScreenView 
                 messageContent={this.state.messageContent}
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