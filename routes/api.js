var express = require('express');
var router = express.Router();
// var models = require('../models')
var controllers = require('../controllers/controllers')

/* GET home page. */
// router.get('/users', function(req, res, next) {
//   res.send('hello world!');
// });

// menampilkan seluruh data user
router.get('/users', controllers.get_users);

// menampilkan data user berdasarkan id
router.get('/users/:id', controllers.get_user_id);

// menambahkan data user
router.post('/users', controllers.add_user);

// menghapus data user berdasarkan id
router.delete('/users/:id', controllers.delete_user_id);

// update data user berdasarkan id
router.put('/users/:id', controllers.update_user)


module.exports = router;
