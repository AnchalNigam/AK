import React from 'react';
import {ChatView} from './chat.presentation';
import {chatList} from './../../services/apis/chatApi';
import {studentList} from './../../services/apis/chatApi';
import {mentorList} from './../../services/apis/chatApi';

// import mentorlist from './mentorList.json';
class ChatContainer extends React.Component {
    state={
        userInfo:'',
        list:null,
        userType:'',
        skip: 0,
        showLoader:false
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
    //function call when component mounted
    componentDidMount(){
     this.getApiCall(this.state.skip);
    }//end

    //api call
    getApiCall=(skip)=>{
      if(this.props.match.url.search('chat')>-1){
        chatList(skip)
       .then((response)=>this.setState({list:response.data,showLoader:false}))
       .catch((e)=>console.log(e))
       }
       else if(this.props.match.params.userType==='mentor'){
         mentorList(skip)
         .then((response)=>this.setState({list:response.data,userType:'mentor',showLoader:false}))
         .catch((e)=>console.log(e))
         console.log(this.state.list)
       }
       else{
         studentList(skip)
         .then((response)=>this.setState({list:response.data,userType:'student',showLoader:false}))
         .catch((e)=>console.log(e))
 
       }
    }
    render() {
      return (
        <ChatView 
          userType={this.state.userType} 
          list={this.state.list} 
          getPrevPageView={this.goToPrevPage} 
          getNextPageView={this.goToNextPage}
          showLoader={this.state.showLoader}
        />
      );
    }
}

export default ChatContainer;