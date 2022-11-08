const express = require('express')
const productRouter = require('./routers/product');

const app = express();


app.use(express.json());
app.use(productRouter)

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(3000, () => {
  console.log('Server is up and running on port 3000');
});
