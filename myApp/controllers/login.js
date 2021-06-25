var express = require('express');
var router = express.Router();

const userJson = require('../models/usersJson');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login',{msg : " "});
});

router.post('/menu', async function(req, res, next){
    let status = await userJson.isExsit(req.body.username, req.body.pwd);
    if(status){
      req.session["authenticated"] = true;
      if(req.body.username == "admin")
        res.render("admin", {user: req.body.username});
      else
        res.render("menu", {user: req.body.username});
    }
    else
        res.render('login', {msg : "Wrong UserName or Password!"})
  });
  

module.exports = router;
