/**
 * User: Administrator
 * Date: 14-7-21
 * Time: 下午9:31
 */
exports.setRouter = function(app){
    var user = require('./routes/user.js');
    var index = require('./routes/index.js');


    app.get('/',index.index);
    app.get('/index',index.index);

    //admin
    app.get('/Admin',user.toLogin);
    app.post('/Admin/login',user.login);
};

