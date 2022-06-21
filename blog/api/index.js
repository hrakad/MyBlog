const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const authRoute = require('./routers/auth.js');
const userRoute = require('./routers/users.js');
const postRoute = require('./routers/posts.js');
const categoryRoute = require('./routers/categories.js');
const path = require('path');

const multer = require('multer');

const app = express();

dotenv.config();
app.use(cors())

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(console.log('Connected to DataBase!'))
  .catch(err => {
    console.log(err.message)
  });

const PORT = process.env.PORT || 3300;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images')
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name)
  }
});

const upload = multer({ storage: storage });

app.post('/api/upload', upload.single('file'), (req, res) => {
  res.status(200).json('File has been uploaded!')
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/categories', categoryRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})