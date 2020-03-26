import supertest from "supertest";
import "@babel/polyfill";
import app from "../../src/app";

const request = supertest(app);

const loginData = {
  email: "entel@cliente.cl",
  rut: "92580000-7",
  password: "entel123"
};

const loginErrorData = {
  email: "entel@cliente.cl",
  rut: "11111111-1",
  password: "RC123456"
};

const changePasswordData = {
  email: "claudio.monasterio@telefonica.com",
  rut: "76124890-1",
  oldPassword: "movistar",
  newPassword: "12345678"
};

const changePasswordDataNOK = {
  email: "entel@cliente.cl",
  rut: "92580000-7",
  oldPassword: "entel123"
};

const recoverPasswordOK = {
  email: "claudio.monasterio@telefonica.com",
  rut: "76124890-1",
};

const recoverPasswordNOK = {
  email: "claudio.monasterio@telefonica.cl",
  rut: "76124890-1",
}

describe("Test login biller", () => {
  test("Login correcto", async () => {
    const res = await request
      .post("/bff/se-bff-empresas/v1/login")
      .send(loginData);
    expect(res.statusCode).toEqual(200);
    expect(res.body.codigo).toEqual("OK");
    expect(res.body.mensaje).toEqual("Inicio de sesion correcto");
  });

  test("Login incorrecto", async () => {
    const res = await request
      .post("/bff/se-bff-empresas/v1/login")
      .send(loginErrorData);
    expect(res.statusCode).toEqual(400);
    expect(res.body.codigo).toEqual("ERROR");
    expect(res.body.mensaje).toEqual("Ha ocurrido un error");
  });

  test("Usuario no existe", async () => {
    const res = await request
      .post("/bff/se-bff-empresas/v1/login")
      .send({ rut: "123" });
    expect(res.statusCode).toEqual(400);
  });

  test("Cambio contraseña exitoso", async () => {
    const res = await request
      .put("/bff/se-bff-empresas/v1/login/change-password")
      .send(changePasswordData);
    expect(res.statusCode).toEqual(200);
  });

  test("Cambio contraseña sin flag", async () => {
    const res = await request
      .put("/bff/se-bff-empresas/v1/login/change-password")
      .send(changePasswordDataNOK);
    expect(res.statusCode).toEqual(400);
  });

  test("Cambio contraseña NOK", async () => {
    const res = await request
      .put("/bff/se-bff-empresas/v1/login/change-password")
      .send({ rut: "1234" });
    expect(res.statusCode).toEqual(400);
  });

  // RECOVER PASSWORD
  test("recover Password OK", async () => {
    const res = await request
      .post("/bff/se-bff-empresas/v1/login/recover-password")
      .send(recoverPasswordOK);
    expect(res.statusCode).toEqual(200);
  });
  test("recover Password NOK", async () => {
    const res = await request
      .post("/bff/se-bff-empresas/v1/login/recover-password")
      .send(recoverPasswordNOK);
    expect(res.statusCode).toEqual(400);
  });
});
