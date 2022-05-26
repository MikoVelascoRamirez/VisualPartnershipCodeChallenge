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

    test("2. Checking if filterByCertification() works", () => {
        const data = [
            {name: "Pepe", id: 2, haveCertification: true}, 
            {name: "Lola", id: 3, haveCertification: true}, 
            {name: "Sam", id: 4, haveCertification: false}
        ];

        const getViaualPartnersWithCertification = visualPartnersController.getPartnersWithCertifications(data);

        expect(getViaualPartnersWithCertification).toStrictEqual(
            [
                {name: "Pepe", id: 2, haveCertification: true}, 
                {name: "Lola", id: 3, haveCertification: true}
            ]
        );
    });

    test("3. Checking if filterByCredits() works", () => {
        const data = [
            {name: "Pepe Le Puig", id: 2, credits: 450}, 
            {name: "Lola Bunny", id: 3, credits: 600}, 
            {name: "Sam Bigotes", id: 4, credits: 500},
            {name: "Kayley Cuocco", id: 5, credits: 200},
        ];

        const getVisualPartnersWith500OrMoreCredits = visualPartnersController.filterByCredits(data);

        expect(getVisualPartnersWith500OrMoreCredits).toStrictEqual(
            [
                {name: "Lola Bunny", id: 3, credits: 600}, 
                {name: "Sam Bigotes", id: 4, credits: 500}
            ]
        );
    });
});

/**
 * TODO: Checking if filterByCredits() works
 */