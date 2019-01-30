import React from 'react';
import {CarouselView} from './../welcome/welcome.presentation';
import ChatListContainer from './../shared/chatlist/chatlist.container';
import SearchContainer from './../shared/search/search.container';
import ListContainer from './../shared/list/userList.container';
import PaginationContainer from './../shared/pagination/pagination.container';
import './chat.presentation.css';

export const ChatView = ({userType,list,getPrevPageView,getNextPageView,showLoader}) => (
    <div className="container-fluid top-adjust">
      <div className="row">
        <div className="col-lg-4 col-md-5 col-12  box-decoration border ">
             <SearchContainer/>
             {userType===''?
             <ChatListContainer showLoader={showLoader} chatList={list}/>  :
             <ListContainer showLoader={showLoader} userList={list}/>
            }
            <PaginationContainer
              getPrevPageView={getPrevPageView}
              getNextPageView={getNextPageView}
            />
        </div>
        <div className="col-lg-8 col-md-7 d-none d-md-block  box-decoration border">
             <CarouselView/>
        </div>
      </div>
    </div>  
)