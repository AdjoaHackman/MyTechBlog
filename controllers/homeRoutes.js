const router = require('express').Router();
const { Post, Comment } = require('../models');

router.get('/', async (req, res) => {
  try {
    // Get all users, sorted by name
    const postData = await Post.findAll({
    });

    // Serialize user data so templates can read it
    const posts = postData.map((project) => project.get({ plain: true }));
    console.log(posts)
    // Pass serialized data into Handlebars.js template
    res.render('homepage', { posts, loggedIn: req.session.logged_in });
    console.log(req.session.logged_in);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post/:id', async (req, res) => {
  try {
    // Get all users, sorted by name
    const postData = await Post.findByPk(req.params.id);
    console.log(req.params);
    const commentsData = await Comment.findAll({
      where: {
        post_id: req.params.id
      }
    })
    // Serialize user data so templates can read it
    const post = postData.get({
      plain:true
    })
    
    console.log(post);
    console.log(commentsData);
    // const comments = commentsData.get({
    //   plain: true
    // })
    const comments = commentsData.map(comment => comment.get({ plain: true }))
    console.log(comments);
    // Pass serialized data into Handlebars.js template
    res.render('post', { comments, post, loggedIn: req.session.logged_in });
    // res.render('comments',{ comments, loggedIn: req.session.logged_in });
    console.log(req.session.logged_in)
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
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
