import React from 'react';
import {UserList} from './userList.presentation';
import {Redirect} from 'react-router-dom';
import {Loader} from './../loader/loader.presentation';
import {limit} from './../../../constants/values'
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
            <div className={this.props.skip*limit+1<=this.props.userList.total?"col-12 text-right small font-weight-bold":"invisible"}>
              {(this.props.skip*limit+1)}-{(this.props.skip+1)*limit > this.props.userList.total ? this.props.userList.total:(this.props.skip+1)*limit} of {this.props.userList.total}
            </div>
            <div className="col-lg-12 col-12">
               {this.props.userList.result.map((user)=>(
                   <UserList 
                    key={user._id} 
                    userDetail={user} 
                    userType={this.props.userType}
                   /> 
               ))} 
            </div>
          </div>
        )
        }
      }
}

export default UserListContainer;