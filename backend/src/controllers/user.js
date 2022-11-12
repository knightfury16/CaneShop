const bcrypt = require('bcrypt');
const generateToken = require('../utils/generateToken');
const userValidationSchema = require('../utils/userValidationSchema');
const prisma = require('./../db/prisma');

//login user by searching email in the db and then comparing password has and password in db
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // find user by email
    const user = await prisma.user.findFirst({ where: { email } });
    if (!user) return res.status(404).send();

    // compare password
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) res.status(400).send({ Error: 'Invalid credentials.' });

    // generate token
    const token = generateToken(user.id);

    // set cookie, httpOnly important
    res.cookie('token', token, {
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      httpOnly: true
    });

    // sending final response
    res.status(200).send({ user, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//getting information from the c;ientr and creating a new user and storing in db
const register = async (req, res) => {
  try {
    // validate data
    const data = await userValidationSchema.validateAsync(req.body);

    // hash password
    data.password = await bcrypt.hash(data.password, 10);

    // create user
    const user = await prisma.user.create({ data });

    // generate token
    const token = generateToken(user.id);

    // set cookie, httpOnly important
    res.cookie('token', token, {
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      httpOnly: true
    });

    // final response
    res.status(201).json({
      user,
      token
    });
  } catch (error) {
    if (error.code === 'P2002') return res.status(400).send({ Error: 'Email taken!' });
    res.status(500).json({
      Error: error.message
    });
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
  deleteUserById
};
