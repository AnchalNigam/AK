import React from 'react';
import '../chatlist/chatlist.presentation.css'

export const UserList = ({click,userDetail}) => (
         <div onClick={click} className="card my-card" id="card-design">
           <div className="card-body p-2">
               <div className="row ">
                   <div className="col-lg-2 col-2 col-sm-2  col-md-2">
                      <img src={userDetail.profilePicUrl==null?'/assets/imgs/user1.jpg':userDetail.profilePicUrl} alt="user_photo" className="img-adjust img-fluid rounded-circle"/>
                   </div>
                   <div className="col-lg-8 col-8 col-sm-8  col-md-8">
                      <span className="d-block font-adjust-heading">{userDetail.firstName}</span>
                      <h5 className="font-adjust-heading"><small>University Of Monash</small></h5>
                      <h5 className="font-adjust-heading"><small>Bachelor Of Technology</small></h5>

                   </div>
               
                   <div className="col-lg-2 col-2 col-sm-2  col-md-2">
                     <h6 className="font-adjust-heading"><small>2:00 pm</small></h6>
                   </div>
               </div>
            </div>
          </div>
)