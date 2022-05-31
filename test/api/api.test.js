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
});


/**
 * TODO: Test if endpoint http://localhost:3000/v1/students returns a list of all visual partners on data
 * 
 * TODO: Test if endpoint http://localhost:3000/v1/emails returns a 200 status code
 * TODO: Test if endpoint http://localhost:3000/v1/emails responses an object like {response: emailsWithCertification, data: list of certificated}
 * TODO: Test if endpoint http://localhost:3000/v1/emails returns a list with emails of visual partners with certification on data
 * 
 * TODO: Test if endpoint http://localhost:3000/v1/credits returns a 200 status code
 * TODO: Test if endpoint http://localhost:3000/v1/credits responses an object like {response: credits, data: list of visualpartners with 500 or more credits}
 * TODO: Test if endpoint http://localhost:3000/v1/credits returns a list of visual partners with 500 or more credits on data
 */