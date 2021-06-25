var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  if(req.session.authenticated){
      res.render('menu',{});
  }
  else{
    res.redirect('/');
  }
});

module.exports = router;