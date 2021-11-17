const express = require('express');
const consign = require('consign')
const bodyparser = require('body-parser');

module.exports = ()=>{
    const app = express();
    app.set('view engine', 'ejs')
    app.use(express.static('public'))

    app.use(bodyparser.urlencoded({extended:false}));
    app.use(bodyparser.json())

    consign().include("controller").into(app)

    return app
}