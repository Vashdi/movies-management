var express = require('express');
var router = express.Router();

const jsonDal = require('../DAL/jsonDAL');

/* GET home page. */
router.get('/', async function(req, res, next) {
  let resp = await jsonDal.getUsers();
  let users = resp.users;
  res.render('UsersManagementPage',{users: users});
});

module.exports = router;
