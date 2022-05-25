const VisualPartnersService = require("../../lib/services/VisualPartnersService");

describe("Test's suite for VisualPartnerService's class", () => {
    
    test("1. Test if getVisualPartners() returns a list with all data", () => {

        const data = [
            {name: "Pepe", id: 2}, 
            {name: "Lola", id: 3}, 
            {name: "Sam", id: 4}
        ];
        
        const visualPartners = VisualPartnersService.readSourceData(data);
                
        expect(visualPartners.length).toBe(3);
        expect(visualPartners).toEqual(data);
    });

    test("2. Test if the method getVisualPartnersWithCertification() returns a list with explorers certificated", () => {

        const data = [
            {name: "Pepe", id: 2, haveCertification: true}, 
            {name: "Lola", id: 3, haveCertification: true}, 
            {name: "Sam", id: 4, haveCertification: false}
        ];
        
        const visualPartnersWithCertification = VisualPartnersService.filterByCertification(data);

        expect(visualPartnersWithCertification).toStrictEqual([{name: "Pepe", id: 2, haveCertification: true}, {name: "Lola", id: 3, haveCertification: true}]);
    });
});

/*
    TODO: Test if the method getVisualPartnersWithCertification() returns a list
    visual partners which have haveCertification attribute
    TODO: Test if the method visualPartnersWithCreditOver500() returns sa list
    visual partners with 500 or more credits.
*/