var express = require('express');
var router = express.Router();
const auth = require("../middleware/auth")
const userController = require("../controllers/user")

/* User sign up & sign-in */
router
  .post('/signup', userController.signUp)
  .post('/signin', userController.signIn);


module.exports = router;
