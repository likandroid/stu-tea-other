var express = require('express');
var router = express.Router();
var pool = require('../modules/db.js');
var checkLogin = require('../modules/checkLogin.js');
var pager = require('../modules/pager.js');


module.exports = router;