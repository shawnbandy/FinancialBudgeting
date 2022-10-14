const router = require('express').Router();

const { User } = require('../../models');

// Creating the user
router.post('/', async (req, res) => {
  console.log('reached');
  try {
    const newUser = await User.create({
      username: req.body.email,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.userId = newUser.id; //!
      req.session.email = newUser.email; //!
      req.session.loggedIn = true;
      res.json(newUser);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Log in route
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.email,
      },
    });
    if (!user) {
      res.status(400).json({ message: 'Invalid username or password' });
      return;
    }
    const validPassword = user.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: 'Invalid username or password' });
      return;
    }
    req.session.save(() => {
      req.session.userId = user.id;
      req.session.email = user.email;
      req.session.loggedIn = true;
      res.json({ user, message: 'You are now logged in' });
    });
  } catch (err) {
    res.status(400).json({ message: 'Invalid username or password' });
  }
});

// Log off route
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
