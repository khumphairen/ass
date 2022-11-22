var express = require('express');
var router = express.Router();
const sanphamController = require('../controller/sanpham.controller');

/* GET users listing. */

router.get('/',sanphamController.getSanphams);//localhost:3000/users/
router.get('/addSanpham',sanphamController.getAddFormSanpham);//hien thi form
router.post('/addSanpham',sanphamController.postAddSanpham);

module.exports = router;
