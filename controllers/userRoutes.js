const router = require('express').Router();
const { User } = require('../models');

router.post('/register', async (req, res) => {
  try {
    const registerUser = await User.create(req.body);

    if (!registerUser) {
      res
        .status(400)
        .json({ message: 'Cannot register user' });
      return;
    }
    res.json({ user: registerUser, message: 'You are now a registered user!' });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});


router.post('/login', async (req, res) => {
  try {
    // Find the user who matches the posted username address
    const userData = await User.findOne({ where: { username: req.body.username } });
    //body is the data sent from the post request

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    // Verify the posted password with the password store in the database
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Create session variables based on the logged in user
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    // Remove the session variables
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
