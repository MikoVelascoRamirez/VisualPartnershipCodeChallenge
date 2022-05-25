
class VisualPartnersService {

    static readSourceData(data){
        return data;
    }

    static filterByCertification(data){
        return data.filter( partner => partner.haveCertification).map(partner => partner.email);
    }
}

module.exports = VisualPartnersService;