var mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);



// Categories Schema
var catSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
}, { });

var Categories = module.exports = mongoose.model('Categories', catSchema);
catSchema.plugin(AutoIncrement, { inc_field: 'id' });

// get categories

module.exports.getCategories = function(callback, limit) {
    Categories.find(callback).limit(limit);
};

//add category
module.exports.addCategory = function(category, callback) {
    Categories.create(category, callback);
};