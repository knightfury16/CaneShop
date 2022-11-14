const bcrypt = require('bcrypt');
const Joi = require('joi');
const generateToken = require('../utils/generateToken');
const sendToken = require('../utils/sendToken');
const userValidationSchema = require('../utils/userValidationSchema');
const prisma = require('./../db/prisma');

// ** login -> api/user/login
//login user by searching email in the db and then comparing password has and password in db
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // find user by email
    const user = await prisma.user.findFirst({ where: { email } });
    if (!user) return res.status(404).send();

    // compare password
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.status(400).send({ Error: 'Invalid credentials.' });

    sendToken(res, user, 200);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//** Register -> api/user/register
//getting information from the c;ientr and creating a new user and storing in db
const register = async (req, res) => {
  try {
    // validate data
    const data = await userValidationSchema.validateAsync(req.body);

    // hash password
    data.password = await bcrypt.hash(data.password, 10);

    // create user
    const user = await prisma.user.create({ data });

    sendToken(res, user, 201);
  } catch (error) {
    if (error.code === 'P2002') return res.status(400).send({ Error: 'Email taken!' });
    res.status(500).json({
      Error: error.message
    });
  }
};

//** logout -> api/user/logout
const logout = async (req, res) => {
  res.cookie('token', null, { expires: new Date(Date.now()), httpOnly: true });
  res.status(200).send('logged out');
};

//** get user profile -> api/user/me
const getUserProfile = async (req, res) => {
  try {
    const user = await prisma.user.findFirst({ where: { id: req.user.id } });

    // delete password field from user body
    delete user.password;

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
};

//**  update password -> api/user/password/update
const updatePassword = async (req, res) => {
  try {
    // validating the request body
    let { oldPassword, newPassword } = await Joi.object({
      oldPassword: Joi.string()
        .min(6)
        .pattern(/^[a-zA-Z0-9]{3,30}$/)
        .required(),
      newPassword: Joi.string()
        .min(6)
        .pattern(/^[a-zA-Z0-9]{3,30}$/)
        .required()
    }).validateAsync(req.body);

    // checking the old password
    const isValid = await bcrypt.compare(oldPassword, req.user.password);
    if (!isValid) return res.status(400).send({ Error: 'Invalid credentials.' });

    // hashing new password
    newPassword = await bcrypt.hash(newPassword, 10);

    // setting the new password
    const user = await prisma.user.update({
      where: { id: req.user.id },
      data: { password: newPassword }
    });

    // sending new token after updating password
    sendToken(res, user, 201);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
};

//getting all users from the db
const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//Update users information by searching for the user by email
const updateUserById = async (req, res) => {
  const { Email } = req.params;
  const { FirstName, LastName, DateOfBirth, PhoneNum, Password, Address, Gender } = req.body;
  const hashedPassword = await bcrypt.hash(Password, 10);
  try {
    const user = await prisma.user.findFirst({ where: { Email } });
    console.log(user);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      const updatedUser = await prisma.user.update({
        where: {
          Email: Email
        },
        data: {
          FirstName: FirstName,
          LastName: LastName,
          DateOfBirth: DateOfBirth,
          PhoneNum: PhoneNum,
          Password: hashedPassword,
          Address: Address,
          Gender: Gender
        }
      });
      res.status(200).json({ message: 'User updated successfully', updatedUser });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//Delete user by searching for the user by email
const deleteUserById = async (req, res) => {
  const { Email } = req.params;
  try {
    const user = await prisma.user.findFirst({ where: { Email } });
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      await prisma.user.delete({ where: { Email: Email } });
      res.status(200).json({ message: 'User deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  login,
  register,
  getAllUsers,
  updateUserById,
  deleteUserById,
  logout,
  getUserProfile,
  updatePassword
};
