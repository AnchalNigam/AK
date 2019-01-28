import React from 'react';
import {ChatView} from './chat.presentation';
import {chatList} from './../../services/apis/chatApi';
import {studentList} from './../../services/apis/chatApi';
import mentorlist from './mentorList.json';
class ChatContainer extends React.Component {
    state={
        userInfo:'',
        list:null,
        userType:''
    }
    componentDidMount(){
      if(this.props.match.url.search('chat')>-1){
       chatList()
      .then((response)=>this.setState({list:response.data}))
      .catch((e)=>console.log(e))
      }
      else if(this.props.match.params.userType==='mentor'){
        this.setState({userType:'mentor',list:mentorlist})
       
      }
      else{
        studentList(0)
        .then((response)=>this.setState({list:response.data,userType:'student'}))
        .catch((e)=>console.log(e))

      }
      

    }
    render() {
        return (
          <ChatView userType={this.state.userType} list={this.state.list}/>
        );
      }
}

export default ChatContainer;