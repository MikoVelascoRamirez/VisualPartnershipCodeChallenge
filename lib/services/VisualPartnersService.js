
class VisualPartnersService {

    static readSourceData(data){
        return data;
    }

    static filterByCertification(data){
        return data.filter( partner => partner.haveCertification);
    }

    static filterByCredits(data){
        return data.filter( partner => partner.credits >= 500);
    }
}

module.exports = VisualPartnersService;