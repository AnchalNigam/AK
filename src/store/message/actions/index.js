import { ADD_MESSAGE } from "../../../constants/action-types";
import { RESET_MESSAGE } from "../../../constants/action-types";
import {HISTORY_MESSAGE} from "../../../constants/action-types";
import {HISTORY_MESSAGE_APPEND} from "../../../constants/action-types";
import {ACTIVE_CHANNELID} from "../../../constants/action-types";
import {RESET_CHANNELID} from "../../../constants/action-types";
export const addMessage =(message) => 
(
    {
     type: ADD_MESSAGE,
      message:message 
}
);

export const resetMessage =() => 
(
    {
     type: RESET_MESSAGE,
}
);

export const historyMessage =(message) => 
(
    {
     type: HISTORY_MESSAGE,
     message:message 


}
);

export const historyMessageAppend =(message) => 
(
    {
     type: HISTORY_MESSAGE_APPEND,
     message:message 


}
);
export const activeChannel =(channelId) => 
(
    {
     type:ACTIVE_CHANNELID,
     channel:channelId 


}
);

export const resetChannel =() => 
(
    {
     type: RESET_CHANNELID,
}
);