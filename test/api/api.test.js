const app = require("../../lib/utils/api");
const request = require("supertest");

describe("Suite's tests for visual partners api", () => {
    test("Test if GET /v1/students returns a 200 status code", async () => {
        const response = await request(app).get("/v1/students");
        expect(response.statusCode).toEqual(200);
    });

    test("Test if GET /v1/students responses with an object", async () => {
        const response = await request(app).get("/v1/students");
        expect(response._body.constructor === Object).toBeTruthy();
    });

    test("Test if GET /v1/students returns a list of visual partners", async () => {
        const response = await request(app).get("/v1/students");
        const Reader = require("../../lib/utils/Reader");
        const data = Reader.readSourceData("src/data/visualpartners.json");
        expect(response._body.data).toStrictEqual(data);
    });

    test("Test if GET /v1/emails returns a 200 status code", async () => {
        const response = await request(app).get("/v1/emails");
        expect(response.statusCode).toEqual(200);
    });

    test("Test if GET /v1/emails responses with an object", async () => {
        const response = await request(app).get("/v1/emails");
        expect(response._body.constructor === Object).toBeTruthy();
    });

    test("Test if GET /v1/emails returns a list with emails of visual partners with certification on data", async () => {
        const response = await request(app).get("/v1/emails");
        const Reader = require("../../lib/utils/Reader");
        const data = Reader.readSourceData("test/data/visualPartnersCertificated.json");
        expect(response._body.data).toStrictEqual(data);
    });

    test("Test if GET /v1/credits returns a 200 status code", async () => {
        const response = await request(app).get("/v1/credits");
        expect(response.statusCode).toEqual(200);
    });

    test("Test if GET /v1/credits responses with an object", async () => {
        const response = await request(app).get("/v1/credits");
        expect(response._body.constructor === Object).toBeTruthy();
    });

    test("Test if GET /v1/credits returns a list of visual partners with 500 or more credits", async () => {
        const response = await request(app).get("/v1/credits");
        const Reader = require("../../lib/utils/Reader");
        const data = Reader.readSourceData("test/data/visualPartnersCredits.json");
        expect(response._body.data).toStrictEqual(data);
    });
});


/**
 * TODO: Test if endpoint http://localhost:3000/v1/credits returns a list of visual partners with 500 or more credits on data
 */