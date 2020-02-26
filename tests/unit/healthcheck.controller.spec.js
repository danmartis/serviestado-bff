"use strict";

// Imports
const assert = require("chai").assert;
const proxyquire = require("proxyquire").noCallThru();
let healthcheck = null;

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
    healthcheck = proxyquire(
    "../../src/app/controllers/v1/healthcheck.controller",
    {}
  );
});

describe("healthcheck", function() {
  it("should return OK", async function() {
    let req = {
      headers: {
        codigosesion: "COD"
      }
    };
    let res = new ResStub();
    await healthcheck.healthcheck(req, res);
    assert(res.statusCode === 200);
  });
});
