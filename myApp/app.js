var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var session = require('express-session');

var loginController = require('./controllers/login');
var menuController = require('./controllers/menu');
var addUSer = require('./controllers/addUser');
var adminController = require('./controllers/adminMenu');
var userManagmentController = require('./controllers/userManagement');
var deleteController = require('./controllers/delete');
var updateController = require('./controllers/update');
var createNewMovieController = require('./controllers/createNewMovie');
var movieDataPageController = require('./controllers/movieDataPage');
var searchController = require('./controllers/search');

var app = express();

app.use(express.static("public"));

app.use(session({
  secret: 'my secret'
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', loginController);
app.use('/menu', menuController);
app.use('/userDataPage',addUSer);
app.use('/AdminMenu',adminController);
app.use('/UsersManagementPage',userManagmentController);
app.use('/delete',deleteController);
app.use('/update',updateController);
app.use('/createNewMoviePage',createNewMovieController);
app.use('/movieDataPage',movieDataPageController);
app.use('/searchMoviesPage',searchController);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
