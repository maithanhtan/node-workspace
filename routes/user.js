var crypto = require('../utils/cryp.js');
var User = require('../models/User.js');
/*
 * GET users listing.
 */
exports.toLogin = function(req, res){
    res.render('admin/login.html');
};
exports.login = function(req, res){
    var username = req.body.username;
    var mdPassword = crypto.md5(req.body.password);
//    User user = User.findUserByName(username);
    console.log(username+" : "+mdPassword);
};