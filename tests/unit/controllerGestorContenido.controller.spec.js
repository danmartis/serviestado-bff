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
    "../../src/controllers/controllerGestorContenido.controller",
    {
      /*"../modules/enviarMonitoreo": {
        enviarLog: function() {}
      },*/

      "../config/config": {
        redis: {
          expiration: "300"
        }
      }
    }
  );
});

describe("opc1", function() {
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
});
