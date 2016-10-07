/**
 * Created by admin on 8/11/2016.
 */
var config = require('config');
var normalizedPath = require("path").join(__dirname, "../models");
var dbConfig = config.get('db_details');


var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var db = mongoose.connect('mongodb://localhost/' + dbConfig.db_name);
require("fs").readdirSync(normalizedPath).forEach(function (file) {
    require("../models/" + file);
});
