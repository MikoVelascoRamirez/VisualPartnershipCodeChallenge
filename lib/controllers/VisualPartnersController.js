const visualPartnerService = require("../services/VisualPartnersService");
const data = require("../utils/Reader").readSourceData("src/data/visualpartners.json");

class VisualPartnersController{

    constructor(){
        this.VisualPartnerService = visualPartnerService;
        this.data = data;
    }

    getVisualPartners(){
        return this.VisualPartnerService.readSourceData(this.data);
    }

    getPartnersWithCertifications(){
        return this.VisualPartnerService.filterByCertification(this.data);
    }

    filterByCredits(){
        return this.VisualPartnerService.filterByCredits(this.data);
    }
}

module.exports = VisualPartnersController;