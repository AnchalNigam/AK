import React from 'react';
import {CarouselView} from './../welcome/welcome.presentation';
import ChatListContainer from './../shared/chatlist/chatlist.container';
import SearchContainer from './../shared/search/search.container';
import UserListContainer from './../shared/list/userList.container';
import PaginationContainer from './../shared/pagination/pagination.container';
import './chat.presentation.css';

export const ChatView = ({chatList,userType,list,getPrevPageView,getNextPageView,showLoader,skip,disablePrev,disableNext}) => (
    <div className="container-fluid top-adjust">
      <div className="row">
        <div className="col-lg-4 col-md-5 col-12  box-decoration border p-3">
             <SearchContainer/>
             {userType===''?
             <ChatListContainer showLoader={showLoader} chatList={chatList} skip={skip}/>  :
             <UserListContainer showLoader={showLoader} userList={list} userType={userType} skip={skip}/>
            }
            <PaginationContainer
              getPrevPageView={getPrevPageView}
              getNextPageView={getNextPageView}
              skip={skip}
              disablePrev={disablePrev}
              disableNext={disableNext}
            />
        </div>
        <div className="col-lg-8 col-md-7 d-none d-md-block  box-decoration border">
             <CarouselView/>
        </div>
      </div>
    </div>  
)