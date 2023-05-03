const FacturaUno = require("./factura_uno");

class FacturaStrategy{
    constructor(type, factura){
        this.type = type;
        this.factura = factura;
    }

    execute(){
        let factura;
        if(this.type = 'type_one'){
            factura = new FacturaUno();
        }

        factura.build(this.factura);

        return factura;
    }
}

module.exports = FacturaStrategy;