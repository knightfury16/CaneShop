const prisma = require("../db/prisma");

//** getting all users from the db -> api/admin/users
const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//** get user by id -> api/admin/users/:id
const getUser = async (req, res) => {
  //convert id from string to number
  const _id = +req.params.id;

  if (isNaN(_id)) {
    res.status(400).send({ Error: 'Invalid id' });
    return;
  }
  try {
    const user = await prisma.user.findFirst({ where: { id: _id } });
    if (!user) res.status(404).send();
    else {
      res.status(200).send(user);
    }
  } catch (error) {
    res.status(500).send(error.toString());
  }
};

module.exports = {
  getAllUsers,
  getUser
}