import supertest from "supertest";
import "@babel/polyfill";
import app from "../../src/app";

const request = supertest(app);

const rutBiller = "92.580.000-7";
const rutBillerNOK = "92.343";
const convenioOK = "35354534";
const convenioNOK = "1234";

describe('Test convenio controllers', () => {
    it('Get convenios y recaudacion biller', async () => {
        const res = await request.get(`/bff/se-bff-empresas/v1/convenios/recaudacion/${ rutBiller }`)
        expect(res.status).toBe(200)
    })

    it("Get solo convenio biller", async () => {
        const res = await request.get(`/bff/se-bff-empresas/v1/convenios/${ rutBiller }`)
        expect(res.status).toBe(200)
    })

    it('Get convenios y recaudacion biller NOK', async () => {
        const res = await request.get(`/bff/se-bff-empresas/v1/convenios/recaudacion/${rutBillerNOK}`)
        expect(res.status).toBe(400)
    })

    it("Get solo convenio biller NOK", async () => {
        const res = await request.get(`/bff/se-bff-empresas/v1/convenios/${ rutBillerNOK }`)
        expect(res.status).toBe(400)
    })

    it("Get recaudaciones por convenio", async () => {
        const res = await request.get(`/bff/se-bff-empresas/v1/recaudacion/${ convenioOK }`)
        expect(res.status).toBe(200)
    })

    it("Get recaudaciones por convenio NOK", async () => {
        const res = await request.get(`/bff/se-bff-empresas/v1/recaudacion/${ convenioNOK }`)
        expect(res.status).toBe(400)
    })

})