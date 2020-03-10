import supertest from 'supertest';
import '@babel/polyfill';
import app from '../../src/app';
const videosData = require('../../src/app/mock-data/help-videos.json');
const videosController = require('../../src/app/controllers/v1/content-manager.controller');

videosData.find = jest.fn();

const videosData = require('../../src/app/mock-data/help-videos.json');
const dataController = require('../../src/app/controllers/v1/content-manager.controller');
const httpMocks = require('node-mocks-http');

let req, res, next;
beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = jest.fn();
});

const request = supertest(app);
describe('Test gestor contenido', () => {

<<<<<<< HEAD
    test('Get landing content', async () => {     
        const res = await request
        .get('/bff/se-bff-empresas/v1/gestor-contenido/landing');
        expect(res.statusCode).toEqual(200);
=======
    describe('Test de gestor de contenido landing', () => {
        it('Debería retornar un código de status 200 y toda la data', async () => {
            await dataController.controllerLandingContent(req, res);
            expect(res.statusCode).toEqual(200);
        });
        it('Si la petición falla debería retornar un error', async () => {
            expect(() => {
                dataController.controllerLandingContent();
            }).toThrow();
        });
>>>>>>> feature/SBM-40-fmujica
    });

    describe('Test de gestor de contenido preguntas', () => {
        it('Debería retornar un código de status 200 y toda la data', async () => {
            await dataController.controllerQuestionsContent(req, res);
            expect(res.statusCode).toEqual(200);
        });
        it('Si la petición falla debería retornar un error', async () => {
            expect(() => {
                dataController.controllerQuestionsContent();
            }).toThrow();
        });
    });

    describe('Test de gestor de contenido detalle preguntas', () => {
        it('Debería retornar un código de status 200 y toda la data', async () => {
            await dataController.controllerQuestionDetailsContent(req, res);
            expect(res.statusCode).toEqual(200);
        });
        it('Si la petición falla debería retornar un error', async () => {
            expect(() => {
                dataController.controllerQuestionDetailsContent();
            }).toThrow();
        });
    });

    describe('Test de gestor de contenido videos', () => {
        it('Debería retornar un código de status 200 y toda la data', async () => {
            await dataController.controllerVideosContent(req, res);
            expect(res.statusCode).toEqual(200);
        });

        it('Si la petición falla debería retornar un error', async () => {
            expect(() => {
                dataController.controllerVideosContent();
            }).toThrow();
        });
    });

    describe('Get videos', async () => {
        it('Debería retornar el json con la data de videos', async () => {
            await videosController.controllerVideosContent(req, res, next)
            expect(videosData.send).toHaveBeenCalledWith(send());
        });
    });

});