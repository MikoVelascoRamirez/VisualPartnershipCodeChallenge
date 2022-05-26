const visualPartnersController = require("../../lib/controllers/VisualPartnersController");

describe("Test's suite for VisualPartnerController", () => {

    test("1. Checking if readSourceData() works", () => {
        const data = [
            {id: 1, name: "Johnny"}, 
            {id: 2, name: "Ezekiel"}, 
            {id: 3, name: "Fernando"}
        ];
    
        const getVisualPartners = visualPartnersController.getVisualPartners(data);
        expect(getVisualPartners).toStrictEqual([
            {id: 1, name: "Johnny"}, 
            {id: 2, name: "Ezekiel"}, 
            {id: 3, name: "Fernando"}
        ]);
    });
});

/**
 * TODO: Checking if readSourceData() works
 * TODO: Checking if filterByCertification() works
 * TODO: Checking if filterByCredits() works
 */