import supertest from "supertest";
import "@babel/polyfill";
import app from "../../src/app";

const request = supertest(app);

const getUserData = {
  email: "claudio.monasterio@telefonica.com",
  rut: "76124890-1"
};

const getUserDataError = {
  email: "claudio.mnasterio@telefonica.com",
  rut: "76124890-1"
};

describe("Test Maintainer User", () => {
  test("personalInformation correcto", async () => {
    const res = await request
      .post("/bff/se-bff-empresas/v1/maintainerUser/personalInformation")
      .send(getUserData);
    expect(res.statusCode).toEqual(200);
    expect(res.body.codigo).toEqual("OK");
    expect(res.body.mensaje).toEqual("Datos encontrados con éxito");
  });

  test("personalInformation incorrecto", async () => {
    const res = await request
      .post("/bff/se-bff-empresas/v1/maintainerUser/personalInformation")
      .send(getUserDataError);
    expect(res.statusCode).toEqual(400);
    expect(res.body.codigo).toEqual("ERROR");
    expect(res.body.mensaje).toEqual("Ha ocurrido un error");
  });
});
