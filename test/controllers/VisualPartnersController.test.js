const visualPartnersController = require("../../lib/controllers/VisualPartnersController");

describe("Test's suite for VisualPartnerController", () => {

    test("1. Checking if readSourceData() works", () => {
        
        const srcData = require("../../lib/utils/Reader").readSourceData("src/data/visualpartners.json");
    
        const getVisualPartners = new visualPartnersController();
        expect(getVisualPartners.getVisualPartners()).toStrictEqual(srcData);
    });

    test("2. Checking if filterByCertification() works", () => {
        const getViaualPartnersWithCertification = new visualPartnersController();

        expect(getViaualPartnersWithCertification.getPartnersWithCertifications().length).toBe(29);
    });

    test("3. Checking if filterByCredits() works", () => {

        const getVisualPartnersWith500OrMoreCredits = new visualPartnersController();

        expect(getVisualPartnersWith500OrMoreCredits.filterByCredits().length).toBe(27);
    });
});