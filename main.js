const express = require('express');
const body_parse = require('body-parser');

const port = 3000;
const app = express();

app.use(body_parse.urlencoded({extended: true}));
app.use(body_parse.json());

const router_factura = require('./router/router_factura');

app.use('/facturas', router_factura);


app.listen(port, ()=>{
    console.log(`server ${port}`);
})