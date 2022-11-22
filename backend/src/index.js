const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
async function main() {
  // ... you will write your Prisma Client queries here
  const order = await prisma.order.create({
    data: {
      shippingAddress: 'Sylhet',
      userId: 1,
      oderItems: {
        create: {
          productId: 2,
          name: 'SanDisk Ultra 128GB SDXC',
          price: 45.89,
          image: 'random/url',
          quantity: 1
        }
      },
      totalPrice: 45.89
    },
    include: { oderItems: { where: { orderId: 1 } } }
  });
  console.log(order);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
