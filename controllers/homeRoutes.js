const router = require('express').Router();
const { Post } = require('../models');

router.get('/', async (req, res) => {
  try {
    // Get all users, sorted by name
    const postData = await Post.findAll({
    });

    // Serialize user data so templates can read it
    const posts = postData.map((project) => project.get({ plain: true }));
    console.log(posts)
    // Pass serialized data into Handlebars.js template
    res.render('homepage', { posts });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post/:id', async (req, res) => {
  try {
    // Get all users, sorted by name
    const postData = await Post.findByPk(req.params.id);
    console.log(req.params);
    // Serialize user data so templates can read it
    const post = postData.get({
      plain:true
    })
    console.log(post);
    // Pass serialized data into Handlebars.js template
    res.render('post', { post });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  try {
    // Pass serialized data into Handlebars.js template
    res.render('login');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
