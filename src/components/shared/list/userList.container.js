import React from 'react';
import {UserList} from './userList.presentation';
import {Redirect} from 'react-router-dom';
class UserListContainer extends React.Component {
    goToChat=()=>{
      // this.props.history.push('/chatscreen');
      console.log('clicked')
      return (
        <Redirect to='/chatscreen'/>     
       )
    }
    render() {
      console.log(this.props.userList);
       if(this.props.userList==null){
         return null
       }
       else{
        return (
          <div className="row">
            <div className="col-lg-12 col-12">
               {this.props.userList.result.map((user)=>(
                   <UserList key={user._id} userDetail={user} click={this.goToChat}/> 
               ))}
              
            </div>
          </div>
        )
        }
      }
}

export default UserListContainer;