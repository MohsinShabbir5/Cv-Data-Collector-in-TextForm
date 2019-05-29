var express = require('express');
var app = express();
var multer = require('multer');
var requestParams = multer();
var fileController = require('./controllers/fileController');
// for route name define//
var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task',{ useNewUrlParser: true }, function(err){
    if(err) throw err;

    console.log('MongoDb Connected');
});

app.get('/files', async function (req, res) {

    fileController.getFiles().then(function (success) {
        res.status(success.status).send(success);
    }, function (failure) {
        res.status(failure.status).send(failure);
    });
});

var port = process.env.NODE_ENV == 'dev' ? (process.env.PORT || 1241) : (process.env.PORT || 1340);

console.log("Enviornment===============" + app.get('env') + process.env.NODE_ENV);

var server  = app.listen(port);
console.log('Quick ways is running on port ' + port);