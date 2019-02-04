import React from 'react';
import {ChatView} from './chat.presentation';
import {chatList} from './../../services/apis/chatApi';
import {studentList} from './../../services/apis/chatApi';
import {mentorList} from './../../services/apis/chatApi';
import SocketContext from './../../services/socket/socketService';
import { connect } from "react-redux";
import {getUserChatList} from './../../store/chatList/actions';
import {getUserInfo} from './../../session';
import '../../services/socket/listenSocket';
import {limit} from './../../constants/values';
import { withRouter } from 'react-router-dom';

const urls=require("config/" + (process.env.REACT_APP_STAGE==='dev'?'development':'production') + ".js");
const io = require('socket.io-client/dist/socket.io');
let loggedInUser;
// import mentorlist from './mentorList.json';
class ChatContainer extends React.Component {
    state={
        userInfo:'',
        list:null,
        userType:'',
        skip: 0,
        showLoader:true,
        disablePrev:true,
        disableNext:false
    }
    componentWillMount(){
      getUserInfo()
      .then((res)=>loggedInUser=res)
      .catch((e)=>console.log(e))
    }
    goToPrevPage = () => {
      if(this.state.skip <= 0) {
        this.setState({disablePrev:true,disableNext:false})
      } else {
        this.setState({skip:this.state.skip-1, showLoader:true,disableNext:false}, () =>{
          if(this.state.skip<=0) {
            this.setState({disablePrev:true})
          }
          this.getApiCall(this.state.skip);
        });
      }
    }
    goToNextPage = () => {
      this.setState({skip:this.state.skip+1,showLoader:true,disablePrev:false},()=>{
        if(this.state.list!==null && (this.state.skip+1)*limit>this.state.list.total) {
          this.setState({disableNext:true})
        } else if(this.props.chatList!==null && (this.state.skip+1)*limit>this.props.chatList.total) {
          this.setState({disableNext:true})
        }
        this.getApiCall(this.state.skip);
      });
      
    }
    
    //function call when component mounted
    componentDidMount(){
      const socket = io(urls.chatUrl, {
        reconnection: true,
        reconnectionDelay: 500,
        reconnectionAttempts: Infinity, 
        transports: ['websocket'],
        });
      // const socket="anchal"
      this.props.socketContext.updateSocketValue('socket',socket);
      this.props.socketContext.updateSocketValue('updation',1);
      if(this.props.location.pathname!=='/chat'){
        if(this.props.socketContext.socketState.updation===1){
          this.getApiCall(this.state.skip);
          }
      }
      else{
          this.getApiCall(this.state.skip);
      }
    }//end
    componentDidUpdate(){
       this.props.socketContext.socketState.socket.on('connect', () => {
        this.props.socketContext.socketState.socket.emit('subscribe',loggedInUser.userId)
      })
    }
    //api call
    getApiCall=(skip)=>{
    
      if(this.props.match.url.search('chat')>-1){
        chatList(skip)
        .then((response)=> this.props.getChatList(response.data))
        .then((res)=>this.setState({showLoader:false}))
        .catch((e)=>console.log(e))
       }
       else if(this.props.match.params.userType==='mentor'){
         mentorList(skip)
         .then((response)=>this.setState({list:response.data,userType:'mentor',showLoader:false}))
         .catch((e)=>console.log(e))
       }
       else{
         studentList(skip)
         .then((response)=>this.setState({list:response.data,userType:'student',showLoader:false}))
         .catch((e)=>console.log(e))
         console.log(this.state.list)
      }
    }

    check=()=>{
       this.props.socketContext.socketState.socket.emit('send-msg','plz msg jao');
    }

    render() {
      return (
        <div>
          <ChatView 
           userType={this.state.userType} 
           list={this.state.list} 
           chatList={this.props.chatList}
           getPrevPageView={this.goToPrevPage} 
           getNextPageView={this.goToNextPage}
           showLoader={this.state.showLoader}
           skip={this.state.skip}
           disablePrev={this.state.disablePrev}
           disableNext={this.state.disableNext}
         />
         <button onClick={this.check}>hahhhaah</button>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withSocketContext(ChatContainer)));

// export default ChatContainer;