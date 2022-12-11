const Stage = require('telegraf/stage')

module.exports = new Stage([
    require('./helloScene'),
    require('./mainScene'),
    require('./batteryScene'),
    require('./metalScene'),
    require('./serviceScene'),
    require('./complainScene'),
    require('./departmentScene')
],{ttl:1000})