var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//import db file
var db = require('./db');

Categories = require('./models/categories');
Threads = require('./models/threads');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());



app.get("/", function(req, res) {
    res.send('Please use /api endpoint');
});

//get events

app.get("/api/forum/categories", function(req, res) {
    Categories.getCategories(function(err, categories){
        if(err) {
            throw err;
        }
        res.json(categories);
    })
});

app.get("/api/forum/categories/:cat_id", function(req, res) {
    Threads.getThreadsByCategory(req.params.cat_id, function(err, threads){
        if(err) {
            throw err;
        }
        res.json(threads);
    })
});

app.get("/api/forum/category/:cat_id", function(req, res) {
    Categories.getCategoryById(req.params.cat_id, function(err, category){
        if(err) {
            throw err;
        }
        res.json(category);
        console.log(category);
    })
});

app.get("/api/forum/threads", function(req, res) {
    Threads.getThreads(function(err, threads){
        if(err) {
            throw err;
        }
        res.json(threads);
    })
});

//app.get("/api/forum/threads/:thread_id", function(req, res) {
//   Threads.getThreadsById(req.params.thread_id, function( err, //thread){
 //       if(err) {
  //          throw err;
  //      }
   //     res.json(threads);
   // })
//});
//post events

app.post("/api/forum/categories", function(req, res) {
    var category = req.body;
    console.log(req.body);
    Categories.addCategory(category, function(err, category){
        if(err) {
            throw err;
        }
        console.log(category);
        res.json(category);
    })
});

app.post("/api/forum/threads", function(req, res) {
    var thread = req.body;
    console.log(req.body);
    Threads.addThread(thread, function(err, thread){
        if(err) {
            throw err;
        }
        console.log(thread);
        res.json(thread);
    })
});

app.listen(3000);
console.log("Running on port 3000");