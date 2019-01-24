import {getUserInfo} from './../../session';
const urls=require("config/" + (process.env.REACT_APP_STAGE==='dev'?'development':'production') + ".js");


//method to get all chatlist of a user
export async function chatList() {
    let result= getUserInfo()
    .then(async function fetchDetail(userInfo){
      let data2={
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'token':userInfo.token
        },
      };
    let result = await fetch(`${urls.chatUrl}/api/v1/users/${userInfo.userId}/channels`,data2).then(response =>{ return response.json()});
      // let result = await fetch(`${localUrl}/users/5b9a618c7282560a1b6ed6ca/channels`,data2).then(response =>{ return response.json()});
    return result;
  
    })
    .catch((e)=>console.log(e,'chatlist api error'))
    return result;
  
  }