import React from 'react';
import SearchContainer from './../shared/search/search.container';
import ChatListContainer from './../shared/chatlist/chatlist.container';
import PaginationContainer from './../shared/pagination/pagination.container';
import getFirtCharAsImage from './../shared/firstchardesign/firstCharDesign.presentation';
import './chatscreen.presentation.css';

export const ChatScreenView = ({loggedInUserId,messageContent,chatHistory,onChange,sendMessage,userId,chatList,showLoader,getPrevPageView,getNextPageView}) => (
  <div className="row">
    <div className="col-lg-4 col-md-5 col-12 d-none d-md-block  box-decoration border ">
        <SearchContainer/>
        <ChatListContainer showLoader={showLoader} chatList={chatList}/>
        <PaginationContainer
              getPrevPageView={getPrevPageView}
              getNextPageView={getNextPageView}
        />
  
    </div>
    <div className="col-lg-8 col-md-7 box-decoration border">
      <div className="row">
        <div className="col-12 chat-height">
          {chatHistory.reverse().map((user,i)=>(
            <div key={i}>
                {user.user._id!==loggedInUserId?
                 (i===0 || user.user._id!==chatHistory[i-1].user._id)?
                <div className="media mt-5">
                    <div className="col-1 nopad">
                      {user.user.avatar == null ? getFirtCharAsImage(user.user.name) : <img src={user.user.avatar} className="img-fluid rounded-circle img-adjust" alt="profile-pic"/>}
                      {/* <img className="img-fluid rounded-circle img-adjust"  src="" alt="profile-pic"/> */}
                    </div>
                    <div className="media-body align-self-center">
                        <div className="card bg bg-light">
                            <div className="card-body p-1">{user.text}</div>
                        </div>
                    </div>
                </div>
                :
                <div className="media">
                   <div className="col-1 nopad">
                   </div>
                   <div className="p-1 media-body align-self-center">
                       <div className="card bg bg-light">
                           <div className="card-body p-1">{user.text}</div>
                       </div>
                   </div>
                </div>
                :
                (i===0 || user.user._id!==chatHistory[i-1].user._id)?
                <div className="media mt-5">
                   <div className="ml-4 media-body align-self-center">
                       <div className="card  bg bg-light">
                           <div className="card-body p-1">{user.text}<span className="pull-right"><small>9:00pm</small></span></div>
                       </div>
                   </div>
                   <div className="col-1 nopad ml-4">
                     {user.user.avatar == null ? getFirtCharAsImage(user.user.name) : <img src={user.user.avatar} className="img-fluid rounded-circle img-adjust" alt="profile-pic"/>}
                   </div>
                </div>
                :
                <div className="media">
                  
                    <div className="ml-4 p-1 media-body align-self-center">
                        <div className="card bg bg-light">
                            <div className="card-body p-1">{user.text}</div>
                        </div>
                    </div>
                    <div className="col-1 nopad ml-4">
                    </div>
                </div>
                }
            </div>
          ))}
        </div>
        <div className="col-11 ml-4">
          <div className="row chat-message">
             <div className="col-10">
                <textarea  name="message-to-send" value={messageContent} onChange={onChange} rows="2" placeholder="Type your message"/>
             </div>
             <div className="col-2">
                <button onClick={sendMessage}>Send</button>
             </div>
          </div>
        </div>
      </div> 
    </div>
  </div>

   
)