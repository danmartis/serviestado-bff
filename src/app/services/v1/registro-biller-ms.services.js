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

export const sendRegistroBillerMS = (dataIn) => {
    // return axios.post('url-ms', data);
    return dataIn;
}

export const loginBillerMS = (dataIn) => {
    // return axios.post('url-ms', dataIn);
    return new Promise( (resolve, reject) => {
        const usersIndexed = indexBy(users, 'rut');
        const user = usersIndexed[dataIn.rut];
        if( !user ) reject("Usuario no encontrado");
        if( user.email === dataIn.email && user.password === dataIn.password){
            resolve(user);
        } else {
            reject("Usuario o contraseña incorrecto");
        }
    })
}