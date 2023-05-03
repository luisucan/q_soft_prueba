class FacturaUno{
    constructor(){
        this.Currency;
        this.ExpenditionPlace;
        this.PayConditions;
        this.Folio;
        this.CfdiType;
        this.PaymentForm;
        this.PaymentMethod;
        this.Reciver;
        this.Items = [];
        this.total;
    }

    build(factura){
        this.Currency = 'MXN';
        this.ExpenditionPlace = '77890';
        this.PayConditions = 'efectivo';
        this.Folio = '01';
        this.CfdiType = '--';
        this.PaymentMethod = '00001';
        this.PaymentForm = '0002';

        this.Reciver = new this.Reciver({
            Rfc: 'xxaxxx',
            Name: ''
        })
    }
}

module.exports = FacturaUno;