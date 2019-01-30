import React from 'react';
import './chatlist.presentation.css'
import convertToDate from './../../../utils/timeToDateConversion';
import getFirtCharAsImage from './../firstchardesign/firstCharDesign.presentation';
import firstCharUpperCase from './../../../utils/firstCharCapital';
import getLastWord from './../../../utils/getlastword';
import isMentor from './../../../utils/ismentor';

export const ChatList = ({click,userDetail}) => (
   <div onClick={click} className="card my-card" id="card-design">
      <div className={isMentor(getLastWord(userDetail.name))===true?"card-body p-2 border-left border-3 mentor_border" : "card-body p-2 border-left border-3 student_border"}>
         <div className="row ">
            <div className="col-lg-3 col-3 col-sm-2  col-md-3 div_center">
               {userDetail.imageUrl == null ? getFirtCharAsImage(userDetail.name) : <img src={userDetail.imageUrl} alt="user_photo" className="img-adjust img-fluid rounded-circle"/>}
            </div>
            <div className="col-lg-6 col-6 col-sm-8  col-md-6 nopad">
               <span className="d-block font-adjust-heading heading_color">{firstCharUpperCase(userDetail.name)}</span>
               <span className="font-adjust-heading subheading_color"><small>{userDetail.lastMessage==null? "" : userDetail.lastMessage.messageText.slice(0,22)+"..."}</small></span>
            </div>
      
            <div className="col-lg-3 col-3 col-sm-2 col-md-3">
               <div className="row">
                  <div className="col-12">
                     <h6 className="font-adjust-heading">
                        <small>
                           {userDetail.lastMessage == null ? "" : convertToDate(userDetail.lastMessage.createdAt)}
                        </small>
                     </h6>
                  </div>
                  <div className="col-2"></div>
                  <div className="col-8">
                  {userDetail.unreadCount == null ? "" : userDetail.unreadCount > 0 ? <div className="circle-class rounded-circle color-class div_center">{userDetail.unreadCount}</div> : ""}
                  </div>
                  <div className="col-2"></div>
               </div>
            </div>
         </div>
      </div>
   </div>
)