import supertest from 'supertest';
import '@babel/polyfill';
import app from '../../src/app';
const videosData = require('../../src/app/mock-data/help-videos.json');

videosData.get = jest.fn();

const request = supertest(app);
describe('Test gestor contenido', () => {

    test('Get landing content', async () => {   
        
        const res = await request
        .get('/bff/se-bff-empresas/v1/gestor-contenido/landing');
        expect(res.statusCode).toEqual(200);
    });

    test('Get landing error', async () => {
        const errorMessage = { message: "Done property missing"};
        const rejectedPromise = Promise.reject(errorMessage);
        const res = await request
        .get('/bff/se-bff-empresas/v1/gestor-contenido/landing', (res, next));
        expect(next).toBeCalledWith(errorMessage);
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