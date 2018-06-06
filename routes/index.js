var express = require('express');
var router = express.Router();

const homeController = require('../controllers/homeController')

/* GET home page. */
router.get('/', homeController.postear);

router.put('/likes', homeController.like);





module.exports = router;
