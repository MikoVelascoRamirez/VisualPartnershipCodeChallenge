const VisualPartnerService = require("../services/VisualPartnersService");

class VisualPartnersController{
    static getVisualPartners(data){
        return VisualPartnerService.readSourceData(data);
    }

    static getPartnersWithCertifications(data){
        return VisualPartnerService.filterByCertification(data);
    }
}

module.exports = VisualPartnersController;