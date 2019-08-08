var express = require('express');
var router = express.Router();
const userController = require('../controllers');

router.get('/', userController.basicAPI);
router.post('/test', userController.testAPI);
router.post('/post_test', userController.postTestAPI);
router.get('/image', userController.imageAPI);
module.exports = router;