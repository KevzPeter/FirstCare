var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors =require('cors')
const bodyParser = require('body-parser');
var mapsRouter = require('./routes/maps');

var app = express();


app.use(cors());
app.use(bodyParser());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', mapsRouter);

if(process.env.NODE_ENV==='production')
{
 app.use(express.static(path.join(__dirname, './client/build')))
  app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,"client/build","index.html"))
  })
}
module.exports = app;
