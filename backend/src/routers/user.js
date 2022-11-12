const express = require('express');
const router = new express.Router();
const userController= require('./../controllers/user');
const verifyjwt= require('./../middleware/verify_jwt');
const verifyRole= require('./../middleware/verify_role');

router.post("/login",userController.login);
router.post("/register",userController.register);
router.get("/getall",verifyjwt,verifyRole,userController.getAllUsers);
router.patch("/update/:Email",userController.updateUserById);
router.delete("/delete/:Email",userController.deleteUserById);
router.patch("/updateinfo",verifyjwt,userController.updateUserInfo);

module.exports = router;