import React from 'react';
import './chatlist.presentation.css'
import convertToDate from './../../../utils/timeToDateConversion';
import getFirtCharAsImage from './../firstchardesign/firstCharDesign.presentation';

export const ChatList = ({click,userDetail}) => (
   <div onClick={click} className="card my-card" id="card-design">
      <div className="card-body p-2">
         <div className="row ">
            <div className="col-lg-3 col-3 col-sm-2  col-md-3">
               {userDetail.imageUrl == null ? getFirtCharAsImage(userDetail.name) : <img src={userDetail.imageUrl} alt="user_photo" className="img-adjust img-fluid rounded-circle"/>}
            </div>
            <div className="col-lg-6 col-6 col-sm-8  col-md-6">
               <span className="d-block font-adjust-heading">{userDetail.name}<div className="circle bg bg-success rounded-circle"></div></span>
               <span className="font-adjust-heading"><small>{userDetail.lastMessage==null? "You have no messages from this user" : userDetail.lastMessage.messageText}</small></span>
            </div>
      
            <div className="col-lg-3 col-3 col-sm-2 col-md-3 text-center">
               <div className="row">
                  <h6 className="font-adjust-heading">
                     <small>
                        {userDetail.lastMessage == null ? "" : convertToDate(userDetail.lastMessage.createdAt)}
                     </small>
                  </h6>
               
                  <div className="col-12"></div>
                  {userDetail.unreadCount == null ? "" : userDetail.unreadCount > 0 ?<div className="rounded-circle p-1 color-class">{userDetail.unreadCount}</div>:""}
                  <div className="col-12"></div>
               </div>
               
            </div>
         </div>
      </div>
   </div>
)