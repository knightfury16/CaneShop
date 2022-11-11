const express = require('express');
const router = new express.Router();
const userController= require('./../controllers/user');

router.post("/login",userController.login);
router.post("/register",userController.register);
router.get("/getall",userController.getAllUsers);
router.put("/update/:Email",userController.updateUserById);
router.delete("/delete/:Email",userController.deleteUserById);

module.exports = router;