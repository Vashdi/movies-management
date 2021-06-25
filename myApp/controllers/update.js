var express = require('express');
var router = express.Router();

const userJson = require('../models/usersJson');

/* GET home page. */
router.get('/:username', async function(req, res, next) {
    let ourUser = await userJson.getUserByUsername(req.params.username);
    res.render('addNew', {user: ourUser});
});

router.post('/:username', async function(req, res, next) {
    await userJson.updateUser(req.params.username, req.body.username, req.body.pwd);
    res.redirect('/adminMenu');
  });

module.exports = router;
