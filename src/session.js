
//method to save user detail in local
export const saveUserDetail = async (userInfo) => {
    try {
      await localStorage.setItem('userInfo',JSON.stringify(userInfo));
    } catch (error) {
      // Error retrieving data
      console.log('error')
      console.log(error.message);
    }
};

//method to get user detail from local
export const getUserInfo = async () => {
    let userInfo;
    try {
     userInfo = await localStorage.getItem('userInfo') || 'none';
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
    if(userInfo!=='none'){
      return JSON.parse(userInfo);
  
    }
    else{
      return userInfo;
    }
  }
  //deleting all details from local 
  export const deleteUserInfo = async () => {
    
    try {
       await (localStorage.removeItem('userInfo'), localStorage.clear());
  
    } catch (error) {
      // Error retrieving data
      console.log('error',error.message);
    }
  }
 