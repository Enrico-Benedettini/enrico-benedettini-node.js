const createError = require('http-errors');
const express = require('express');
const path = require('path');
//Useful module to work with the file system
//Module needs to be installed with yarn add fs-extra
const fs = require("fs-extra");

var indexRouter = require('./routes/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);
// Serve static content at public dir
app.use(express.static(path.join(__dirname, 'public')));

//Access command line parameters with process.argv[i]



//start server
app.set('port', process.env.PORT || 8888);
var server = require('http').createServer(app);
server.on('listening', function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Express server listening on port ' + server.address().port);
    }
});
server.listen(app.get('port'));