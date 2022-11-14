const express = require('express');
const { getAllUsers, getUser, updateRole } = require('../controllers/admin');
const { auth, authorizeRole } = require('../middleware/auth');
const { AUTHORIZED_ROLES } = require('../utils/constants');
const router = express.Router();

//**  get all users api/admin/users
// !Auth2
router.get('/users', auth, authorizeRole(AUTHORIZED_ROLES), getAllUsers);

//**  get user by id
// !Auth2
router.get('/users/:id', auth, authorizeRole(AUTHORIZED_ROLES), getUser);

// ** Update role of user -> api/admin/user/update/:id
// !Auth2
router.post('/user/update/:id', auth, authorizeRole(AUTHORIZED_ROLES), updateRole);

module.exports = router;
