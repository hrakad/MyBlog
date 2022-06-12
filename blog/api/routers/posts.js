const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');

//Create Post
router.post('/', async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error)
  }
});

//Update Post
router.put('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (error) {
        res.status(500).json(error)

      }
    } else {
      res.status(401).send('You can not update this post!')
    }
  } catch (error) {
    res.status(500).json(error)
  }
});

//Delete Post
router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).send('Post has been deleted!')
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(401).send(`You can't delete this post!`)
    }
  } catch (error) {
    res.status(500).json(error);
  }
})
module.exports = router;