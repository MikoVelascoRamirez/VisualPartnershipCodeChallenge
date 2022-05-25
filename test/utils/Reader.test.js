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

    test("3. Verifying if the file returns an array", () => {
        const data = Reader.readSourceData("src/data/visualpartners.json");
        expect(data.constructor === Array).toBeTruthy();
    });

    test("4. Checking if file returns a not empty array", () => {
        const data = Reader.readSourceData("src/data/visualpartners.json");
        expect(data.length).toBeGreaterThan(0);
    });    

    test("5. Testing if every object in the array has all properties", () => {
        const data = Reader.readSourceData("src/data/visualpartners.json");
        for(let explorer of data){
            expect(Object.keys(explorer)).toEqual(expect.arrayContaining(["id", "name", "email", "credits", "enrollments", "previousCourses", "haveCertification"]));
        }
    });

    test("6. Checking if every value of each object is not null", () => {
        const data = Reader.readSourceData("src/data/visualpartners.json");
        for(let explorer of data){
            expect(explorer.id).not.toBeNull();
            expect(explorer.name).not.toBeNull();
            expect(explorer.email).not.toBeNull();
            expect(explorer.credits).not.toBeNull();
            expect(explorer.enrollments).not.toBeNull();
            expect(explorer.previousCourses).not.toBeNull();
            expect(explorer.haveCertification).not.toBeNull();
        }
    });

    test("7. Testing if every value of each object has the correct type value.", () => {
        const data = Reader.readSourceData("src/data/visualpartners.json");
        for(let explorer of data){
            expect(typeof explorer.id).toBe("string");
            expect(typeof explorer.name).toBe("string");
            expect(typeof explorer.email).toBe("string");
            expect(typeof explorer.credits).toBe("number");
            expect(explorer.enrollments instanceof Array).toBeTruthy();
            expect(typeof explorer.previousCourses).toBe("number");
            expect(typeof explorer.haveCertification).toBe("boolean");
        }
    });
});