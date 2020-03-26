import supertest from "supertest";
import "@babel/polyfill";
import app from "../../src/app";

const request = supertest(app);

const getUserData = {
  email: "claudio.monasterio@telefonica.com",
  rut: "76.124.890-1"
};

const dataNewUser = {
  name: "name",
  email: "email@gmail.com",
  perfil: "perfil",
  asignarContacto: "true",
  tipoContacto: "Contacto Operacional"
};

const dataUpdateUser = {
  birthday: "12-10-1994",
  phone: "999999999",
  address: "San antonio 8666",
  comuna: "Santiago",
  city: "Santiago"
}

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
      .send({});
    expect(res.statusCode).toEqual(400);
    expect(res.body.codigo).toEqual("ERROR");
    expect(res.body.mensaje).toEqual("Ha ocurrido un error");
  });

  test("Prueba registerNewUser OK", async () => {
    const res = await request
      .post("/bff/se-bff-empresas/v1/maintainerUser/registerNewUser")
      .send(dataNewUser);
    expect(res.statusCode).toEqual(200);
    expect(res.body.codigo).toEqual("OK");
    expect(res.body.mensaje).toEqual("Datos registrados con éxito");
  });

  test("Prueba registerNewUser NO OK", async () => {
    const res = await request
      .post("/bff/se-bff-empresas/v1/maintainerUser/registerNewUser")
      .send({});
    expect(res.statusCode).toEqual(400);
    expect(res.body.codigo).toEqual("ERROR");
    expect(res.body.mensaje).toEqual("Ha ocurrido un error");
  });

  test("UpdatePerfilUser OK", async () => {
    const res = await request
      .put("/bff/se-bff-empresas/v1/maintainerUser/updatePerfilUser")
      .send(dataUpdateUser);
    expect(res.statusCode).toEqual(200);
    expect(res.body.codigo).toEqual("OK");
    expect(res.body.mensaje).toEqual("Datos registrados con éxito");
  });

  test("UpdatePerfilUser NO OK", async () => {
    const res = await request
      .put("/bff/se-bff-empresas/v1/maintainerUser/updatePerfilUser")
      .send({});
    expect(res.statusCode).toEqual(400);
    expect(res.body.codigo).toEqual("ERROR");
    expect(res.body.mensaje).toEqual("Ha ocurrido un error");
  });
});
