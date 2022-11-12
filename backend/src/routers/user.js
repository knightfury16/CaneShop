const express = require("express");
const router = new express.Router();
const userController= require('./../controllers/user');

router.post("/login",userController.login);
router.post("/register",userController.register);
router.get("/getall",userController.getAllUsers);

module.exports = router;
