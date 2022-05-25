
class VisualPartnersService {

    static readSourceData(data){
        return data;
    }

    static filterByCertification(data){
        return data.filter( partner => partner.haveCertification);
    }
}

module.exports = VisualPartnersService;