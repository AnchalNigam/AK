import {addMessage} from './../../store/message/actions'
import store from './../../store';
import {chatList} from './../apis/chatApi';
import {getUserChatList} from './../../store/chatList/actions'

export function a(io){
    console.log(io,'yoo anchal')
    io.on('connect', () => {
        console.log('connection establish');
    });
    io.on('msg',()=>{
        console.log('yes msg comes')
    })
    io.on('listen-msg',(data)=>{
       console.log('msg-recevive')
    })
    io.on('after-some-time',(data)=>{
        console.log(data)
     })
    
    io.on('channel-receive-msg',(data)=>{
        console.log('hii',data);
        let temp=store.getState();
        let activeChannelId=temp.messageState.activeChannelId;
        if(data.channelId==activeChannelId){
            console.log(activeChannelId,data.channelId,'msg comes')
            store.dispatch(addMessage(data))

        }
        chatList()
        .then((response)=> store.dispatch(getUserChatList(response.data)))
        .catch((e)=>console.log('chat list screen error in socket service file'))
    })



}