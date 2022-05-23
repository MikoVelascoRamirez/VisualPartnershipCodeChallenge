const Reader = require("../../lib/utils/Reader");

describe("Test's suite for Reader utility", () => {
    test("1. Verifiying if the file exists", () => {
        const visualPartnersSourceData = Reader.readDirectory("src/data"); 
        expect(visualPartnersSourceData[0]).toBe("visualpartners.json");
    });

    test("2. Verifying if the route file exists", () => {
        const visualPartnersSourceDataRoute = Reader.readDirectory("src/data");
        expect(visualPartnersSourceDataRoute).not.toBe("ENOENT");
    });
});

/*  TODO: Testing if the route file exists
//  TODO: Testing if the file in the route exists
//  TODO: Testing if the file returns a not-null array
//  TODO: Testing if each element of that array is an object
//  TODO: Testing if every object in the array has all properties.
    TODO: Testing if every value of each object is not undefined
    TODO: Testing if every value of each object has the correct type value.
*/