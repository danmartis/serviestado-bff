export const checkObject = (obj, arr) => {
    if(obj) {
        const objectKeys = Object.keys(obj);
        for (const key of arr) {
            if(!objectKeys.includes(key)) return false;            
        }
        return true;
    }
}

export const checkObjectTest = (obj,arr) => {
    if(obj) {return Object.keys(obj).every(e => arr.includes(e));}
    else { return false; }
}