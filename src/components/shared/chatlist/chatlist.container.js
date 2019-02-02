import React from 'react';
import {ChatList} from './chatlist.presentation';
import {withRouter} from 'react-router-dom';
import {Loader} from './../loader/loader.presentation';
import {getUserInfo} from './../../../session';
import {limit} from './../../../constants/values';
class ChatListContainer extends React.Component {
    state={
      userInfo:null
    }
    
    componentDidMount(){
      getUserInfo()
      .then((res)=>this.setState({userInfo:res}))
      .catch((e)=>console.log(e))
    }
    goToChat = (userId) => {
      // this.props.history.push('/chatscreen');
      console.log('clicked',this.state.userInfo.userId)
      this.props.history.push('/'+this.state.userInfo.userId+'/chatscreen/'+userId)
    }
    render() {
    
       if(this.props.chatList==null || this.props.showLoader){
         return <Loader />
       }
       else{
        return (
          <div className="row">
            <div className={this.props.skip*limit+1<=this.props.chatList.total?"col-12 text-right":"invisible"}>
              {(this.props.skip*limit+1)}-{(this.props.skip+1)*limit > this.props.chatList.total ? this.props.chatList.total:(this.props.skip+1)*limit} of {this.props.chatList.total}
            </div>
            <div className="col-lg-12 col-12">
               {this.props.chatList.channels.map((user)=>(
                   <ChatList 
                    key={user._id}
                    userDetail={user} 
                    click={()=>this.goToChat(user._id)}
                   /> 
               ))}
              
            </div>
          </div>
        )
        }
      }
}

export default withRouter(ChatListContainer);