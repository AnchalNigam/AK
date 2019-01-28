//funtion to pad zeros on time
function pad(num) {
    return ("0"+num).slice(-2);
}
//function to convert date from timestamp to human readable
export function convertToDate(timeStamp){
   if(timeStamp!=null){
       let data= new Date(timeStamp);
       var today=new Date();
       let FullDate=`${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
       let todayData=`${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`;
       if(todayData!=FullDate){
           return FullDate;
       }
       else{
           let hours = data.getHours();
           let minutes = data.getMinutes();
           return (hours>12)?((pad(hours)-12)+":"+pad(minutes)+" PM"):pad(hours)+":"+pad(minutes)+" AM"
       }

   }
   else{
       return '';
   }

}
export default convertToDate;