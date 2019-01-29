export function convertToDate(stamp){
    if(stamp!==null){
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
      "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
      let data= new Date(stamp * 1000);
      let startFullDate=`${monthNames[data.getMonth()]}/${data.getFullYear()}`;
      return startFullDate;
    }
    else{
      return 'Present';
    }
   


  }