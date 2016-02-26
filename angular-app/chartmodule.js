var ChartController = require("./controllers/chartController.js");
var ChartService = require("./services/chartService.js");


var appchart = angular.module("appchart", ['chart.js'])
    .controller('ChartController', ChartController)
    .service = ('ChartService', ChartService);
module.exports = appchart;