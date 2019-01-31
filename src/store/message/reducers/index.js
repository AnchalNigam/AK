import { ADD_MESSAGE } from "../../../constants/action-types";
import { RESET_MESSAGE } from "../../../constants/action-types";
import {HISTORY_MESSAGE} from "../../../constants/action-types";
import {HISTORY_MESSAGE_APPEND} from "../../../constants/action-types";
import {ACTIVE_CHANNELID} from "../../../constants/action-types";
import {RESET_CHANNELID} from "../../../constants/action-types";

const  INITIAL_STATE  = {
    messages: [],
    activeChannelId:null
    // chatList=[]
  };

  function messageReducer(state = INITIAL_STATE, action) {
      
    switch (action.type) {
        case  ADD_MESSAGE :
    
             return { ...state, messages:  [ action.message,...state.messages] };

        case RESET_MESSAGE:
           
            return {...state,messages:[]}
        case HISTORY_MESSAGE:
        
          return {...state,messages:action.message}
        case HISTORY_MESSAGE_APPEND:
        
          return { ...state, messages:  [...state.messages, ...action.message] };
        case ACTIVE_CHANNELID:
         console.log(action.channel)
          return { ...state, activeChannelId: action.channel };
        case RESET_CHANNELID:
          
          return { ...state, activeChannelId: null};
        default:
          return state;
      }
  }


  export default messageReducer;