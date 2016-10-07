/**
 * Created by admin on 7/29/2016.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RolesSchema = new mongoose.Schema({
    role_name: {type: String, unique: true, required: true},
    created_on: Date,
});

mongoose.model('Roles', RolesSchema);


