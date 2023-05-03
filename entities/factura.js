const Producto = require('./producto');

class Factura{
    constructor({
        tipo, Monto, Cliente, Items
    }){
        this.tipo = tipo;
        this.Monto = Monto;
        this.Cliente = Cliente;

        this.Items = Items.map((item)=>new Producto(item));
    }
}

module.exports = Factura;