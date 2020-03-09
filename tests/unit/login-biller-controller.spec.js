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

    test("Usuarion no existe", async () => {
        const res = await request
                        .post('/bff/se-bff-empresas/v1/login')
                        .send({ rut: "123" })
        expect(res.statusCode).toEqual(400);
    })
})