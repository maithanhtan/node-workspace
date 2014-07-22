/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 14-7-22
 * Time: 上午11:00
 * To change this template use File | Settings | File Templates.
 */

var crypto = require('crypto');
exports.md5 = function(str){
    var md5 = crypto.createHash('md5');
    md5.update(str);
    var d = md5.digest('hex');
    return d;
};
