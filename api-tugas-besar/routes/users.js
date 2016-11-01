var express = require('express');
var router = express.Router();
var userController  =  require("../controller/userController");

var midlewareCheckauth =  require("../midleware/checkauth");

/* GET users listing. */
router.get('/', userController.index);
router.post('/register',userController.register);
router.post('/login',userController.login);
router.get('/test/:email/:token',midlewareCheckauth.login ,userController.test);

module.exports = router;
