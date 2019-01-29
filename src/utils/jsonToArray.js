//method to manipulate json object to render 
export function setContent(arr){
    let info=[];
    if(arr.length!==0){
        for(let i of arr){
        info.push(i.name);
        }
       return info.toString();
    }
    else{
        return 'No Info has been provided.'
    }
}//end