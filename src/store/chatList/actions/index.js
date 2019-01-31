import { GET_CHATLIST } from "../../../constants/action-types";
import { RESET_CHATLIST } from "../../../constants/action-types";
import { CURRENT_ROUTE } from "../../../constants/action-types";

export const getUserChatList =(list) => 
(
    {
      type: GET_CHATLIST,
      chatList:list 
}
);
export const resetChatList =() => 
(
    {
     type: RESET_CHATLIST,
}
);
export const setCurrentRouteName =(routeName) => 
(
    {
     type: CURRENT_ROUTE,
     route:routeName
}
);
