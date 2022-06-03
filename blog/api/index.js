const express = require('express');

const app = express();

//dotenv.config();

const PORT = process.env.PORT || 3300;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})