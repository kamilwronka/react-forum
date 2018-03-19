var mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

// Threads Schema
var threadsSchema = mongoose.Schema({
    thread_id: Number,
    name: {
        type: String,
        required: true
    },
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
}, { });

var Threads = module.exports = mongoose.model('Threads', threadsSchema);
threadsSchema.plugin(AutoIncrement, { inc_field: 'thread_id' });

// get threads

module.exports.getThreads = function(callback, limit) {
    Threads.find(callback).limit(limit);
};

module.exports.addThread = function(category, callback) {
    Threads.create(category, callback);
};

module.exports.getThreadsByCategory = function(id, callback) {
    Threads.find({ "cat_id": id }, callback);
};