var express = require('express');
var router = express.Router();
const userController = require('../controller/user.controller');

/* GET users listing. */

router.get('/user',userController.getUsers);//localhost:3000/users/
router.get('/adduser',userController.getAddForm);//hien thi form
router.post('/adduser',userController.postAddUser);

module.exports = router;
