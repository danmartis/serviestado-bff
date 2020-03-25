import supertest from "supertest";
import "@babel/polyfill";
import app from "../../src/app";

const request = supertest(app);
describe("Test Healthcheck", () => {
  test("Healthcheck", async () => {
    const res = await request.get("/bff/se-bff-empresas/v1/healthcheck");
    expect(res.statusCode).toBe(200);
  });

  test("Check error", async () => {
    const res = await request.get("/bff/ruta-mala");
    expect(res.statusCode).toBe(404);
  });
});
