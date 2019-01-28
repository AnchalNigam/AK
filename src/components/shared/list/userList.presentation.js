import React from 'react';
import '../chatlist/chatlist.presentation.css'
import './userList.presentation.css'
import getFirtCharAsImage from './../firstchardesign/firstCharDesign.presentation';
import firstCharUpperCase from './../../../utils/firstCharCapital';

export const UserList = ({click,userDetail}) => (
         <div onClick={click} className="card my-card" id="card-design">
           <div className="card-body p-2">
               <div className="row ">
                   <div className="col-lg-3 col-3 col-sm-2  col-md-3">
                     {userDetail.profilePicUrl==null?getFirtCharAsImage(userDetail.firstName):<img src={userDetail.profilePicUrl} alt="user_photo" className="img-adjust img-fluid rounded-circle"/>}
                   </div>
                   <div className="col-lg-9 col-9 col-sm-10 col-md-9">
                      <h5 className='d-block font-adjust-heading heading_color'>{firstCharUpperCase(userDetail.firstName)}</h5>
                      <h5 className="font-adjust-heading subheading_color"><small>University Of Monash</small></h5>
                      <h5 className="font-adjust-heading subheading_color"><small>Bachelor Of Technology</small></h5>
                      <i className="grey_color"><h5 className="font-adjust-heading subheading_color"><small>Last Active:12:38 AM</small></h5></i>
                   </div>
               
                   {/* <div className="col-lg-3 col-3 col-sm-2 col-md-3">
                     <h6 className="font-adjust-heading"><small>2:00 pm</small></h6>
                   </div> */}
               </div>
            </div>
         </div>
)