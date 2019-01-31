import React from 'react';
import {ChatList} from './chatlist.presentation';
import {withRouter} from 'react-router-dom';
import {Loader} from './../loader/loader.presentation';

class ChatListContainer extends React.Component {
    goToChat = (userId) => {
      // this.props.history.push('/chatscreen');
      console.log('clicked')
      this.props.history.push('/chatscreen/'+userId)
    }
    render() {
      console.log(this.props.showLoader)
      console.log(this.props.chatList)
       if(this.props.chatList==null || this.props.showLoader){
         return <Loader />
       }
       else{
        return (
          <div className="row">
            <div className="col-lg-12 col-12">
               {this.props.chatList.channels.map((user)=>(
                   <ChatList key={user._id} userDetail={user} click={()=>this.goToChat(user._id)}/> 
               ))}
              
            </div>
          </div>
        )
        }
      }
}

export default withRouter(ChatListContainer);