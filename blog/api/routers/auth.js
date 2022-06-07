const router = require('express').Router();
const User = require('../models/User.js');

const bcrypt = require('bcrypt');

//Register
router.post('/register', async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt)
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPass,
    })
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
})


//Login
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          name: user.name,
          email: user.email,
        });
        return;
      }
    }
    res.status(401).send({ message: 'Invalid email or password' });
  } catch (error) {
    res.status(500).json(err);
  }
})
module.exports = router;