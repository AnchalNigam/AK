import React from 'react';
import {UserList} from './userList.presentation';
import {Redirect} from 'react-router-dom';
import {Loader} from './../loader/loader.presentation';

class UserListContainer extends React.Component {
   
    goToChat=()=>{
      // this.props.history.push('/chatscreen');
      console.log('clicked')
      return (
        <Redirect to='/chatscreen'/>     
       )
    }
  
    render() {
       if(this.props.userList==null || this.props.showLoader){
        return <Loader />;
       }
       else{
        return (
          <div className="row">
            <div className="col-lg-12 col-12">
               {this.props.userList.result.map((user)=>(
                   <UserList key={user._id} userDetail={user}/> 
               ))}
              
            </div>
          </div>
        )
        }
      }
}

export default UserListContainer;