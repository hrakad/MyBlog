const router = require('express').Router();
const User = require('../models/User.js');
const Post = require('../models/Post.js');

const bcrypt = require('bcrypt');

//Update
router.put('/:id', async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt)
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      }, { new: true });
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json(`You can't update this account`)
  }
});

//Delete
router.delete('/:id', async (req, res) => {
  if (req.body.userId === req.params.id) {
    const user = await User.findById(req.params.id);
    if (user) {
      try {
        await Post.deleteMany({ name: user.name })
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json('User has been deleted!!');
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(404).json('User Not found');
    }

  } else {
    res.status(401).json(`You can't delete this account`)
  }
});

//Get Users
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
});


module.exports = router;