/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 14-7-22
 * Time: 上午11:47
 * To change this template use File | Settings | File Templates.
 */
var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit : 10,
    host : '127.0.0.1',
    user:'root',
    password:''
});

module.exports = pool;