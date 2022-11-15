const prisma = require('../db/prisma');

exports.createNewOrder = async (req, res) => {
  try {
    // TODO: Add data validation
    const { orderItems } = req.body;
    delete req.body.orderItems;

    const order = await prisma.order.create({
      data: {
        ...req.body,
        userId: req.user.id,
        orderItems: {
          createMany: { data: [...orderItems] }
        }
      }
    });
    res.status(201).json({ order });
  } catch (error) {
    res.status(500).json({ Error: error.messgae });
  }
};

exports.getAllOrder = async (req, res) => {
  try {
    const orders = await prisma.order.findMany({ include: { orderItems: true } });
    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
};
