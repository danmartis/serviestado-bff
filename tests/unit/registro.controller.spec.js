import supertest from "supertest";
import "@babel/polyfill";
import app from "../../src/app";

const data = {
  business_name: "ENTEL S.A.",
  rut: "11.111.111-1",
  name: "Pedro",
  last_name: "Engel",
  email: "pedrito@engel.cl",
  phone: "9123456789",
  position: "Big Boss"
};

const request = supertest(app);
describe("Test registro controller", () => {
  test("Prueba registro", async () => {
    const res = await request
      .post("/bff/se-bff-empresas/v1/registro-biller")
      .send(data);
    console.log(res.body);
    expect(res.statusCode).toEqual(200);
  });

  test("Prueba registro error", async () => {
    const res = await request
      .post("/bff/se-bff-empresas/v1/registro-biller")
      .send({});
    expect(res.statusCode).toEqual(400);
  });

  test("Get biller", async () => {
    const res = await request.get(
      "/bff/se-bff-empresas/v1/registro-biller/123"
    );
    expect(res.statusCode).toEqual(200);
  });
});
