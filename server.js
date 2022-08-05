import 'dotenv/config';
//console.log(process.env);
import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { fileURLToPath } from 'url'
import { dirname } from 'path'

import { router as indexRouter } from './routes/index.js';
import { router as usersRouter } from './routes/users.js';
import { router as menusRouter } from './routes/menus.js';

import { MongoClient } from 'mongodb';


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  console.log("server/get");  
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
    //res.send("Test");
    
  });



  // Simplifies the serving up of static content such as HTML for the React SPA, images, CSS files, and JavaScript files
 app.use(express.static(path.join(__dirname, 'build')));
// MongoDB database connection initialization
//
var db = {};


//Use connect method to connect to the Server
const mclient = new MongoClient("mongodb://localhost:27017", { useNewUrlParser: true, useUnifiedTopology: true, minPoolSize: 10, maxPoolSize: 100 });
mclient.connect(function (err, client) {
  if (err === undefined || err === null) {
    db.client = client;
    db.collection = client.db('wp60db').collection('menutop');
    console.log("Connected to MongoDB server");
  } else {
    console.log("Failed to connected to MongoDB server");
    console.log(err);
    process.exit(0);
  }
});




 // Set the database connection for middleware usage
app.use('/', function (req, res, next) {
  req.db = db;
  next();
});

app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/api/menus', menusRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log("error 404");
  next(createError(404));
});

// Rest API routes


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(
    { message: err.message,
    error: err } 
    );
});

  // If our process is shut down, close out the database connections gracefully
  process.on('SIGINT', function () {
    console.log('MongoDB connection close on app termination');
    db.client.close();
    process.exit(-1);
  });
  
  process.on('SIGUSR1', function () {
    console.log('MongoDB connection close on app restart');
    db.client.close();
    process.kill(process.pid, 'SIGUSR1');
  });



var server = app.listen(3000/*app.get('port')*/, function () {
  server.keepAliveTimeout = 65000; // TODO: Need this in here according to articles to be greater than the ALB timeout of 60K
  console.log('Express server listening on port ' + server.address().port);
});


export { server };
