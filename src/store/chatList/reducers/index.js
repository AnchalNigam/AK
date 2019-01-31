import { GET_CHATLIST } from "../../../constants/action-types";
import { RESET_CHATLIST } from "../../../constants/action-types";
import { CURRENT_ROUTE } from "../../../constants/action-types";

const  INITIAL_STATE  = {
    chatList: null,
    currentRoute:''
    // chatList=[]
  };

  function chatListReducer(state = INITIAL_STATE, action) {
      
    switch (action.type) {
        case GET_CHATLIST:
        //  console.log('reducer',action.chatList)
          return {...state,chatList:action.chatList}
        case RESET_CHATLIST:
          return INITIAL_STATE;
        case CURRENT_ROUTE:
            // console.log('route dispatch',action.route)
           return {...state,currentRoute:action.route};
        default:
          return state;
        
      }
  }
  export default chatListReducer;