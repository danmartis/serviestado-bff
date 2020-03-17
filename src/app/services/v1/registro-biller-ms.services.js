import axios from "axios";

const users = [
    {
        email: 'cliente@cliente.cl',
        rut: '11111111-1',
        password: 'RC123456',
        changePassword: true
    },
    {
        email: 'entel@cliente.cl',
        rut: '11111111-2',
        password: '12345678',
        changePassword: false
    },
];

const indexBy = (array, key) => array.reduce((acc, val) => { acc[val[key]] = val; return acc }, {});

const usersIndexed = indexBy(users, 'rut');

export const sendRegistroBillerMS = (dataIn) => {
    // return axios.post('url-ms', data);
    return dataIn;
}

export const loginBillerMS = (dataIn) => {
    // return axios.post('url-ms', dataIn);
    return new Promise( (resolve, reject) => {
        const user = usersIndexed[dataIn.rut];
        if( !user ) reject("Usuario no encontrado");
        if( user.email === dataIn.email && user.password === dataIn.password){
            resolve(user);
        } else {
            reject("Usuario o contraseña incorrecto");
        }
    })
}

export const changePasswordBillerMS = (dataIn) => {
    // return axios.put('url-ms', dataIn);
    return new Promise( (resolve, reject) => {
        const user = usersIndexed[dataIn.rut];
        if(!user) reject("Usuario no encontrado");
        if( user.email === dataIn.email && user.password === dataIn.oldPassword && user.changePassword === true){
            user.password = dataIn.newPassword;
            user.changePassword = false;
            usersIndexed[dataIn.rut] = user;
            resolve(user)
        } else {
            reject("No puede cambiar contraseña, verifique informacion")
        }
    })
}