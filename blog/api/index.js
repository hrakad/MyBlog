const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const authRoute = require('./routers/auth.js');
const userRoute = require('./routers/users.js');
const postRoute = require('./routers/posts.js');

const app = express();

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(console.log('Connected to DataBase!'))
  .catch(err => {
    console.log(err.message)
  });

const PORT = process.env.PORT || 3300;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})