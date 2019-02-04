import {getUserInfo} from './../../session';
const urls=require("config/" + (process.env.REACT_APP_STAGE==='dev'?'development':'production') + ".js");

//function of login
 export async function login(data) {
     console.log(data)
    let data2={
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email:data.email,
            password:data.password,
        }),
      };
   
   let result= await fetch(`${urls.baseUrl}/api/v1/users/login`,data2).then(response => response.json());
   console.log(result)
   return result;
}//end

//function of logout
export async function logout() {
let result= getUserInfo()
    .then((userInfo)=>{
    return userInfo;
    })
    .then((userInfo)=>logoutApiCall(userInfo))
    .catch((e)=>console.log('logout error'))
    return result;
}//end
   
//LOGOUT CALL
const logoutApiCall=async (userInfo)=>{
//   console.log(userInfo.fbtoken)
//  await fetch(`https://graph.facebook.com/${userInfo.id}/permissions`,{ method : 'DELETE', body: userInfo.fbtoken })
//  .then((result)=>console.log(result))
//  .catch((e)=>console.log(e))

    let data2={
    method: 'GET',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'token':userInfo.token

    },
    
    };
    let result = await fetch(`${urls.baseUrl}/api/v1/users-logout`,data2).then(response =>{ return response.json()});
    return result;
}

 