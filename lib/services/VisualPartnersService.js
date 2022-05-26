class VisualPartnersService {

    static readSourceData(data){
        return data;
    }

    static filterByCertification(data){
        return data.filter( partner => partner.haveCertification).map(partner => partner.email);
    }

    static filterByCredits(data){
        return data.filter( partner => partner.credits >= 500);
    }
}

module.exports = VisualPartnersService;