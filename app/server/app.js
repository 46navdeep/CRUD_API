var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');
var cors = require('cors');


var app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

const port = process.env.PORT || 3002;


mongoose.connect('mongodb://navdeep:navdeep@ds233218.mlab.com:33218/taskapi');

require('./controllers/product.server.controller')(app);

app.listen(port,() => {
  console.log(`App Server Listening at ${port}`);
});
