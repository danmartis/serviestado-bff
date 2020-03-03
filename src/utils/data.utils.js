export const checkObject = (obj, arr) => {
    if(obj) {return Object.keys(obj).every(e => arr.includes(e));}
    else { return false; }
}