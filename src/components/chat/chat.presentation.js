import React from 'react';
import {CarouselView} from './../welcome/welcome.presentation';
import ChatListContainer from './../shared/chatlist/chatlist.container';
import SearchContainer from './../shared/search/search.container';

import './chat.presentation.css';

export const ChatView = ({chatList}) => (
    <div className="container-fluid top-adjust">
      <div className="row">
        <div className="col-lg-4 col-md-5 col-12 d-none d-md-block  box-decoration border ">
             <SearchContainer/>
             <ChatListContainer chatList={chatList}/>
        </div>
        <div className="col-lg-8 col-md-7 box-decoration border">
             <CarouselView/>
        </div>
      </div>
    </div>  
)