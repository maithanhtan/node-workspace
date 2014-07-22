/**
 * User: Administrator
 * Date: 14-7-21
 * Time: 下午9:41
 */
var pool = require('../utils/mysqlPool.js');

var User = function(username,password){
    this.username = username;
    this.password = password;
};
User.prototype.findUserByName = function(username){
    pool.getConnection();
};
module.exports = User;