
import React from 'react';
import {ChatView} from './chat.presentation';
import {chatList} from './../../services/apis/chatApi';
import {studentList} from './../../services/apis/chatApi';
import {mentorList} from './../../services/apis/chatApi';
import SocketContext from './../../services/socket/socketService';
import { connect } from "react-redux";
import {getUserChatList} from './../../store/chatList/actions';
import { Switch, Route,withRouter } from 'react-router-dom';

const urls=require("config/" + (process.env.REACT_APP_STAGE==='dev'?'development':'production') + ".js");
const io = require('socket.io-client/dist/socket.io');

// import mentorlist from './mentorList.json';
class ChatContainer extends React.Component {
    state={
        userInfo:'',
        list:null,
        userType:'',
        skip: 0,
        showLoader:false,
        isMounted: false
    }
    goToPrevPage = () => {
      if(this.state.skip === 0) {
        console.log("EOP")
      } else {
        this.setState({skip:this.state.skip-1, showLoader:true}, () =>{
          this.getApiCall(this.state.skip);
        });
      }
    }
    goToNextPage = () => {
      this.setState({skip:this.state.skip+1,showLoader:true},()=>{
        this.getApiCall(this.state.skip);
      });
      
    }
    // componentWillUpdate(nextProps, nextState) {
    //   console.log('updated chat yes')
    //   console.log(nextProps,nextState)
    // }
    // componentDidUpdate(prevProps, prevState,){
    //   console.log('yes chat')
    //   console.log(prevProps,prevState)
    // }
    //function call when component mounted
    componentDidMount(){
      console.log('mounted')
     const socket = io(urls.chatUrl, {
        reconnection: true,
        reconnectionDelay: 500,
        reconnectionAttempts: Infinity, 
        transports: ['websocket'],
        });
      // const socket="anchal"
      this.props.socketContext.updateSocketValue('socket',socket);
      this.props.socketContext.updateSocketValue('updation',1);
      this.setState({isMounted: true})

        // socket.on('connect', () => {
        //   console.log('connection establish');
        //   });
        // socket.on('connect_error', (err) => {
        //   console.log(err)
        //   })
      
        //  socket.on('disconnect', () => {
        //  console.log("Disconnected Socket!")
        //  })
      
     this.getApiCall(this.state.skip);
    }//end
    componentWillUnmount(){
      console.log('unmount')
      this.state.isMounted = false
    }
    //api call
    getApiCall=(skip)=>{
      if(this.props.match.url.search('chat')>-1){
        chatList(skip)
       .then((response)=>this.setState({list:response.data,showLoader:false}))
      // .then((response)=>console.log(response))

      // .then((response)=> this.props.getChatList(response.data))
        .catch((e)=>console.log(e))
       }
       else if(this.props.match.params.userType==='mentor'){
         mentorList(skip)
         .then((response)=>this.setState({list:response.data,userType:'mentor',showLoader:false}))
         .catch((e)=>console.log(e))
         console.log(this.state.list)
       }
       else{
         if(this.state.isMounted){
         studentList(skip)
         .then((response)=>this.setState({list:response.data,userType:'student',showLoader:false}))
         .catch((e)=>console.log(e))
        }
      }
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(this.props.location,nextProps.location)
        return this.state.list !== nextState.list;
      }

    render() {
      // console.log(this.props.location)
      console.log('chat rerender')
      console.log(this.state.list)
      console.log(this.state.isMounted)

      return (
          <ChatView 
           userType={this.state.userType} 
           list={this.state.list} 
          //  chatList={this.props.chatList}
           getPrevPageView={this.goToPrevPage} 
           getNextPageView={this.goToNextPage}
           showLoader={this.state.showLoader}
          
         />
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

// const mapStateToProps = (state) => {
//   // console.log('update')
//   // console.log(state.chatListState.currentRoute,state.chatListState.chatList)
//   return { 
//     chatList: state.chatListState.chatList
//    };
// };

// // Map dispatch function into props
// const mapDispatchToProps = (dispatch) => ({
//   getChatList: list => {
//     dispatch(getUserChatList(list))
//   },
// }
// ); 

export default (withSocketContext(ChatContainer));

// export default ChatContainer;