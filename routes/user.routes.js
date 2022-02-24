const router = require('express').Router();
const authController = require('../controllers/auth.controller');
// const userController = require('../controllers/user.controller');

// auth
router.post("/register", authController.signUp);

module.exports = router