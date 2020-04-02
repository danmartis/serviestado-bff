import supertest from "supertest";
import "@babel/polyfill";
import app from "../../src/app";

const httpMocks = require("node-mocks-http");
const dataController = require("../../src/app/controllers/v1/content-manager.controller");

let req, res;
beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
});

let ParamsGeneralesSelectField = {
  space: "0yclc5nncs5v",
  accessToken: "MEoLU5JMYUkVSNh8VEZQJA0Kf6KtovLlJqcQYciWInA",
  contentTypeId: "enterpriseLanding",
  selectField: "fields.benefits"
};

const request = supertest(app);
describe("Test gestor contenido", () => {
  describe("Test de gestor de contenido de landing", () => {
    it("Debería retornar un código de status 200 y toda la data", async () => {
      await dataController.controllerLandingContent(req, res);
      expect(res.statusCode).toEqual(200);
    });
    it("Si la petición falla debería retornar un error", async () => {
      expect(() => {
        dataController.controllerLandingContent();
      }).toThrow();
    });
  });

  describe("Test de gestor de contenido de preguntas", () => {
    it("Debería retornar un código de status 200 y toda la data", async () => {
      await dataController.controllerQuestionsContent(req, res);
      expect(res.statusCode).toEqual(200);
    });
    it("Si la petición falla debería retornar un error", async () => {
      expect(() => {
        dataController.controllerQuestionsContent();
      }).toThrow();
    });
  });

  describe("Test de gestor de contenido de detalle preguntas", () => {
    it("Debería retornar un código de status 200 y toda la data", async () => {
      await dataController.controllerQuestionDetailsContent(req, res);
      expect(res.statusCode).toEqual(200);
    });
    it("Si la petición falla debería retornar un error", async () => {
      expect(() => {
        dataController.controllerQuestionDetailsContent();
      }).toThrow();
    });
  });

  describe("Test de gestor de contenido de videos", () => {
    it("Debería retornar un código de status 200 y toda la data", async () => {
      await dataController.controllerVideosContent(req, res);
      expect(res.statusCode).toEqual(200);
    });
    it("Si la petición falla debería retornar un error", async () => {
      expect(() => {
        dataController.controllerVideosContent();
      }).toThrow();
    });
  });
});

describe("Test ContentFul", () => {
  test("Test de CF para traer los Beneficios del landing", async () => {
    const res = await request
      .get("/bff/se-bff-empresas/v1/gestor-contenido/CF/landingBenefits")
      .send(ParamsGeneralesSelectField);
    expect(res.statusCode).toEqual(200);
  });
});