var express = require('express');
var router = express.Router();

const jsonDal = require('../DAL/jsonDAL');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('addNew',{user : null});
});

router.post('/addUser', async function(req, res, next) {
  await jsonDal.addUSer(req.body.username, req.body.pwd);
  res.redirect('/adminMenu');
});

module.exports = router;