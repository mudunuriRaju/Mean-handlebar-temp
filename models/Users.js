/**
 * Created by admin on 7/29/2016.
 */

var mongoose = require('mongoose');
var UsersSchema = new mongoose.Schema({
    username: {type: String, unique: true, required: true},
    firstname: String,
    lastname: String,
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    userrole: {type: mongoose.Schema.Types.ObjectId, ref: 'Roles'},
    status: {type: Number, default: 1},
    created_on: Date,
    update_on: Date
});

mongoose.model('Users', UsersSchema);


