var express = require('express');
var app = express();
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var cors = require("cors");
var path = require("path");
var morgan = require("morgan");

var cron = require('node-cron');
 

cron.schedule('* * * * *', () => {
    console.log('running a task every minute');
  });
  // const {sendMail} = require('./controllers/sendmail');
  
  //             console.log('sending email...')
  //             sendMail("Hello world", "this is email body it can contain html also")
  //             console.log('email sent ✓')
app.set('views','./views');
app.set('view engine','ejs');
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use(function(req, res, next) {
  // res.setHeader('Access-Control-Allow-Origin', '*');
  // res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  // res.setHeader('Access-Control-Allow-Headers', 'X-R-equested-With, content-type, Authorization');
  // next();
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');


  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
app.use(cors({origin: '*'}));


mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

app.use(express.static(path.join(__dirname,'public')));



app.get('/', function (req, res) {
   res.send('Hello World');
});

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Ung dung Node.js dang hoat dong tai dia chi: http://%s:%s", host, port)
});