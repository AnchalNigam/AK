import React from 'react';
import {CarouselView} from './../welcome/welcome.presentation';
import ChatListContainer from './../shared/chatlist/chatlist.container';
import SearchContainer from './../shared/search/search.container';
import ListContainer from './../shared/list/userList.container';

import './chat.presentation.css';

export const ChatView = ({userType,list}) => (
    <div className="container-fluid top-adjust">
      <div className="row">
        <div className="col-lg-4 col-md-5 col-12  box-decoration border ">
             <SearchContainer/>
             {userType===''?
             <ChatListContainer chatList={list}/>  :
             <ListContainer userList={list}/>
            }
        </div>
        <div className="col-lg-8 col-md-7 d-none d-md-block  box-decoration border">
             <CarouselView/>
        </div>
      </div>
    </div>  
)