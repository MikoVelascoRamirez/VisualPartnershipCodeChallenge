const Reader = require("../../lib/utils/Reader");

describe("Test's suite for Reader utility", () => {
    test("1. Verifiying if the file exists", () => {
        const visualPartnersSourceData = Reader.readDirectory("src/data"); 
        expect(visualPartnersSourceData[0]).toBe("visualpartners.json");
    });
});