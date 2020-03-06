import supertest from 'supertest';
import '@babel/polyfill';
import app from '../../src/app';

const request = supertest(app);
describe('Test gestor contenido', () => {
    test('Get', async () => {
        const res = await request.get('/bff/se-bff-empresas/v1/gestorContenido')
        expect(res.statusCode).toBe(200);
    })
});