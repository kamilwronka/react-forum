var mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);



// Categories Schema
var catSchema = mongoose.Schema({
    cat_id: Number,
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
catSchema.plugin(AutoIncrement, { inc_field: 'cat_id' });

// get categories

module.exports.getCategories = function(callback, limit) {
    Categories.find(callback).limit(limit);
};

module.exports.getCategoryById = function(id, callback) {
    Categories.find({ "cat_id": id }, callback);
    console.log(id, callback);
};

//add category
module.exports.addCategory = function(category, callback) {
    Categories.create(category, callback);
};