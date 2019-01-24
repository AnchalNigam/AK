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
   return result;
}//end