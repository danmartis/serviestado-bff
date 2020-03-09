import supertest from 'supertest';
import '@babel/polyfill';
import app from '../../src/app';

const request = supertest(app);
describe('Test gestor contenido', () => {

    test('Get landing content', async () => {   
        const res = await request
        .get('/bff/se-bff-empresas/v1/gestor-contenido/landing');
        expect(res.statusCode).toEqual(200);
    });

    test('Get questions content', async () => {
        const res = await request   
        .get('/bff/se-bff-empresas/v1/gestor-contenido/questions')
        expect(res.statusCode).toEqual(200);
    });

    test('Get question details content', async () => {
        const res = await request
        .get('/bff/se-bff-empresas/v1/gestor-contenido/question-details');
        expect(res.statusCode).toEqual(200);
    });

    test('Get videos content', async () => {
        const res = await request   
        .get('/bff/se-bff-empresas/v1/gestor-contenido/videos');
        expect(res.statusCode).toEqual(200);
    });

});