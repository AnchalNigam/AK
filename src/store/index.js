import { createStore,combineReducers } from "redux";
import messageReducer from "./message/reducers";
import chatListReducer from "./chatList/reducers";
// Root reducer
const rootReducer = combineReducers({
    chatListState: chatListReducer,
    messageState: messageReducer,
});

const store = createStore(rootReducer);
export default store;