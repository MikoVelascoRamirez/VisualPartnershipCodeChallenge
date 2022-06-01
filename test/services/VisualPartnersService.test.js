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
            {name: "Pepe", email: "correodepepe@gmail.com", id: 2, haveCertification: true}, 
            {name: "Lola", email: "correodelola@gmail.com", id: 3, haveCertification: true}, 
            {name: "Sam", email: "correodesam@gmail.com", id: 4, haveCertification: false}
        ];

        const visualPartnersWithCertification = VisualPartnersService.filterByCertification(data);
        expect(visualPartnersWithCertification).toEqual(expect.arrayContaining([
            "correodepepe@gmail.com",
            "correodelola@gmail.com"
        ]));
    });
    
    test("3) Test method visualPartnersWithCreditOver500() returns a list with partners with 500 or more credits.", () => {
        const data = [
            {name: "Pepe", id: 2, credits: 450}, 
            {name: "Lola", id: 3, credits: 600}, 
            {name: "Sam", id: 4, credits: 500},
            {name: "Kayley", id: 5, credits: 200},
        ];

        const visualPartnersWithMoreOf500Credits = VisualPartnersService.filterByCredits(data);

        expect(visualPartnersWithMoreOf500Credits).toStrictEqual([{name: "Lola", id: 3, credits: 600}, {name: "Sam", id: 4, credits: 500}]);
    });
});