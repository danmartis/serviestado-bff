import supertest from 'supertest';
import '@babel/polyfill';
import app from '../../src/app';

const request = supertest(app);

const loginData = {
    "email": "cliente@cliente.cl",
    "rut": "11111111-1",
    "password": "RC123456"
};

const loginErrorData = {
    "email": "entel@cliente.cl",
    "rut": "11111111-1",
    "password": "RC123456"
};

const changePasswordData = {
    "email": "cliente@cliente.cl",
    "rut": "11111111-1",
    "oldPassword": "RC123456",
    "newPassword": "12345678"
}

const changePasswordDataNOK = {
    email: 'entel@cliente.cl',
    rut: '11111111-2',
    oldPassword: '12345678',
}

describe("Test login biller", () => {
    test("Login correcto", async () => {
        const res = await request
                        .post('/bff/se-bff-empresas/v1/login')
                        .send(loginData)
        expect(res.statusCode).toEqual(200);
    })

    test("Login incorrecto", async () => {
        const res = await request
                        .post('/bff/se-bff-empresas/v1/login')
                        .send(loginErrorData)
        expect(res.statusCode).toEqual(400);
    })

    test("Usuario no existe", async () => {
        const res = await request
                        .post('/bff/se-bff-empresas/v1/login')
                        .send({ rut: "123" })
        expect(res.statusCode).toEqual(400);
    })

    test("Cambio contraseña exitoso", async () => {
        const res = await request
                        .put('/bff/se-bff-empresas/v1/login/change-password')
                        .send(changePasswordData)
        expect(res.statusCode).toEqual(200);
    })

    test("Cambio contraseña sin flag", async () => {
        const res = await request
                        .put('/bff/se-bff-empresas/v1/login/change-password')
                        .send(changePasswordDataNOK)
        expect(res.statusCode).toEqual(400);
    })

    test("Cambio contraseña NOK", async () => {
        const res = await request
                        .put('/bff/se-bff-empresas/v1/login/change-password')
                        .send({ rut: "1234"})
        expect(res.statusCode).toEqual(400);
    })
})