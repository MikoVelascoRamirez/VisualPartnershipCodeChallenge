const VisualPartnersService = require("../../lib/services/VisualPartnersService");

describe("Test's suite for VisualPartnerService's class", () => {

    test("1. Test if getVisualPartners() returns a list with all data", () => {
        const data = [{name: "Pepe", id: 2}, {name: "Lola", id: 3}, {name: "Sam", id: 4}], visualPartners = VisualPartnersService.readSourceData(data);
                
        expect(visualPartners.length).toBe(3);
        expect(visualPartners).toEqual(data);
    });
});

/*
    TODO: Test if the method getVisualPartnersWithCertification() returns a list
    visual partners which have haveCertification attribute
    TODO: Test if the method visualPartnersWithCreditOver500() returns sa list
    visual partners with 500 or more credits.
*/