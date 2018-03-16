var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/forum');
var database = mongoose.connection;



module.exports.db = database;

