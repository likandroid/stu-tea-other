var express = require('express');
var router = express.Router();
var pool = require('../modules/db.js');
var checkLogin = require('../modules/checkLogin.js');
var pager = require('../modules/pager.js');

router.get('/add', checkLogin, function (req, res, next) {
    var sql = `SELECT * FROM departments WHERE status = 0;`;
    pool.query(sql, function (err, result) {
        if (err) {
            res.json({ code: 201, message: "数据库操作异常！" });
            return;
        }
        res.json({ code: 200, message: "成功！", departs: result })
    })
})
// 二级判断，首先选择了院系
router.get('/getByDepartId', checkLogin, function (req, res, next) {
    var departId = req.query.departId;
    console.log("内容是"+departId);
    if(!departId){
        res.json({ code:200, message: '参数错误！'});
        return;
    }
    var sql = `
    SELECT * FROM departments WHERE status = 0; 
    SELECT * FROM majors WHERE status = 0 AND departId=?; 
    SELECT * FROM classes WHERE status = 0 AND departId=?; 
    `;
    pool.query(sql, [departId, departId], function (err, result) {  
        if(err) {
            res.json( {code: 201, message: "数据库操作异常"});
            return;
        }
        res.json({
            code:200,
            message: "操作成功",
            departs: result[0],
            majors: result[1],
            classes: result[2]
        })

    })
})


module.exports = router;