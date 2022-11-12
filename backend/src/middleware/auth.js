const jwt = require('jsonwebtoken');
const prisma = require('../db/prisma');

const auth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    // const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log('Decoded jwt :', decoded);
    const user = await prisma.user.findFirst({ where: { id: decoded.userId } });
    if (!user) throw new Error();

    req.token = token;
    req.user = user;

    next();
  } catch (error) {
    res.status(401).send({ Error: 'Please authenticate!' });
  }
};

module.exports = auth;
