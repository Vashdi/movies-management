var express = require('express');
var router = express.Router();

const jsonDal = require('../DAL/jsonDAL');

/* GET home page. */
router.get('/:username' ,async function(req, res, next) {
    let resp = await jsonDal.getUsers();
    let allUsers = resp.users;
    let ourUserArr = allUsers.filter(user => user.username == req.params.username);
    let ourUser = ourUserArr[0];
    await jsonDal.deleteUser(ourUser.username, ourUser.pwd); 
    res.render('deleteUser', {username: ourUser.username});
});

module.exports = router;
