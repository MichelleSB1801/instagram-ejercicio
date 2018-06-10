var express = require('express');
var router = express.Router();

const homeController = require('../controllers/homeController');
const newpostController = require('../controllers/newpostController');

/* GET home page. */
router.get('/', homeController.postear);

router.get('/newpost', newpostController.vista);

router.post('/newpost', newpostController.newpost);

router.put('/likes', homeController.like);

router.get('/productos/:id', homeController.dynamic);



module.exports = router;
