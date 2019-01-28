//method to make first character in capital letter
export function firstCharUpperCase(name){
    name=name.replace(/ /g,'')
    return name.charAt(0).toUpperCase()+name.slice(1);
}

export default firstCharUpperCase;