import React from 'react';
import {ChatView} from './chat.presentation';
import {chatList} from './../../services/apis/chatApi';

class ChatContainer extends React.Component {
    state={
        userInfo:'',
        chatList:null
    }
    componentDidMount(){
      chatList()
      .then((response)=>this.setState({chatList:response.data}))
      .catch((e)=>console.log(e))

    }
    render() {
        return (
          <ChatView chatList={this.state.chatList}/>
        );
      }
}

export default ChatContainer;