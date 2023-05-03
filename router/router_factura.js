const express = require('express');
const Factura = require('./../entities/factura');
const FacturaStrategy = require('../entities/factura_strategy');

const router = express.Router();

router.post('/', (req, res)=>{

    const body = req.body;
    const factura = new Factura(body);

    const strategy = new FacturaStrategy('type_one', factura);
    const invoice = strategy.execute();

    return res.json({
        ...invoice
    })
});

module.exports = router;