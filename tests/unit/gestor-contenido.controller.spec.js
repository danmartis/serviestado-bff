"use strict";

// Imports
const assert = require("chai").assert;
const proxyquire = require("proxyquire").noCallThru();
let controllerGestorContenidoCtl = null;

// Tests
const ResStub = function() {
  return {
    sendCalledWith: "",
    statusCode: null,
    status: function(code) {
      this.statusCode = code;
      return this;
    },
    send: function(args) {
      this.sendCalledWith = args;
      return this;
    }
  };
};

beforeEach(function() {
  controllerGestorContenidoCtl = proxyquire(
    "../../src/app/controllers/v1/gestor-contenido.controller",
    {
      /*"../modules/enviarMonitoreo": {
        enviarLog: function() {}
      },*/

      /*"../config/config": {
        redis: {
          expiration: "300"
        }
      }*/
    }
  );
});

describe("controllerGestorContenido", function() {
  it("should return OK", async function() {
    let req = {
      headers: {
        codigosesion: "COD"
      }
    };
    let res = new ResStub();
    await controllerGestorContenidoCtl.controllerGestorContenido(req, res);
    assert(res.statusCode === 200);
  });

  it("should return NOK", async function() {
    let req = {};
    let res = new ResStub();
    await controllerGestorContenidoCtl.controllerGestorContenido(req, res);
    (res.statusCode === 500);
  });
});
