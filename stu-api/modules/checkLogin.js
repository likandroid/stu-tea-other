function checkLogin(req, res, next) {
    if (!req.session.user) {
       res.json({code: 10000, message: '未登录！'})
        return;
    }

    next();
}

module.exports = checkLogin;