
class VisualPartnersController{

    constructor(){
        this.VisualPartnerService = require("../services/VisualPartnersService");
        this.data = require("../utils/Reader").readSourceData("src/data/visualpartners.json");
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