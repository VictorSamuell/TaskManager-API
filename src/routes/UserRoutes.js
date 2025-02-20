const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();
//rota do usuario

router.post('/register', userController.register);
router.post('/login', userController.login);

module.exports = router;