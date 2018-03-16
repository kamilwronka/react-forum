var mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

// Threads Schema
var threadsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    _id: Number,
    cat_id: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
}, { _id: false });

var Threads = module.exports = mongoose.model('Threads', threadsSchema);
threadsSchema.plugin(AutoIncrement);

// get threads

module.exports.getThreads = function(callback, limit) {
    Threads.find(callback).limit(limit);
};

module.exports.addThread = function(category, callback) {
    Threads.create(category, callback);
};

