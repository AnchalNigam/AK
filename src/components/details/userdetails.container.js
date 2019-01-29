import React from 'react';
import {UserDetailsView} from './userdetails.presentation';
import {userDetail} from './../../services/apis/chatApi';


class UserDetailsContainer extends React.Component {
    state={
        user:null,
        applied:[],
        educations:[],
        wexp:[],
        preferences:[],
        currentEducation:null,
        testScores:[],
      }
    componentDidMount(){
        let getUserId=this.props.match.params.userId;
        let data={
            "selectedUserId":getUserId
        }
        userDetail(data)
        .then((response)=>this.setState(
            {
            applied:response.data.appliedUniversity,
            wexp:response.data.wexps,
            user:response.data.user,
            testScores:response.data.testScores,
            preferences:response.data.preferences,
            currentEducation:response.data.currentEducation,
            educations:response.data.educations,
            }
            ))
        .catch((e)=>console.log(e))
    }
    render() {
        if(this.state.user==null){
            return null;
        }
        return (
          <div className="container-fluid top-adjust">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-12 d-none d-md-block border ">
                   <UserDetailsView applied={this.state.applied} wexp={this.state.wexp}
                    user={this.state.user} testScores={this.state.testScores} preferences={this.state.preferences}
                    currentEducation={this.state.currentEducation} educations={this.state.educations}/>
                </div>
            </div>
          </div>  
        );
      }
}

export default UserDetailsContainer;