export const checkObject = (obj, arr) => {
    if(!obj) throw Error("Objeto o propiedad ingresada no esta definida");
    if(typeof obj != 'object') throw Error("La variable ingresada no es objeto");
    if(!Array.isArray(arr)) throw Error("Las llaves deben estar dentro de un array");
    
    for (const key of arr) {
        if(!obj.hasOwnProperty(key)) return false;            
    }
    return true;
}

export const checkObjectTest = (obj,arr) => {
    if(obj) {return Object.keys(obj).every(e => arr.includes(e));}
    else { return false; }
}