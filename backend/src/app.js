require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const userRoute = require('../src/routers/user');
const productRouter = require('./routers/product');
const adminRoute = require('./routers/admin');
const orderRoute = require('./routers/order');
const cookieParser = require('cookie-parser');

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.json({ message: 'Server Running ' });
});
app.use('/api/user', userRoute);
app.use('/api/products', productRouter);
app.use('/api/admin', adminRoute);
app.use('/api/order', orderRoute);

app.listen(process.env.PORT, async () => {
  console.log('Server Starting at ' + process.env.PORT);
});
