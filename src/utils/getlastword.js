export function getLastWord(name) {
    let n = name.split(" ");
    return n[n.length-1];
}

export default getLastWord;