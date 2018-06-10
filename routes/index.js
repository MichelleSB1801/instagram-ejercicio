var express = require('express');
var router = express.Router();

<<<<<<< HEAD
const homeController = require('../controllers/homeController');
const newpostController = require('../controllers/newpostController');
=======
>>>>>>> ee00c456dc756df09fe94f19b92b249d9745577c

/* GET home page. */
router.get('/', homeController.postear);

<<<<<<< HEAD
router.get('/newpost', newpostController.vista);

router.post('/newpost', newpostController.newpost);

router.put('/likes', homeController.like);

router.get('/productos/:id', homeController.dynamic);
=======

>>>>>>> ee00c456dc756df09fe94f19b92b249d9745577c



module.exports = router;
