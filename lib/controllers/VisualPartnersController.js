const VisualPartnerService = require("../services/VisualPartnersService");

class VisualPartnersController{
    static getVisualPartners(data){
        return VisualPartnerService.readSourceData(data);
    }
}

module.exports = VisualPartnersController;