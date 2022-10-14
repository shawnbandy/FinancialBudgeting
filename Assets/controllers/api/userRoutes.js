const router = require('express').Router();

const { User } = require('../../models');

// Creating the user
router.post('/', async (req, res) => {
  console.log('reached');
  try {
    //*checks to see if the user's username is unique, else it doesn't let them create it
    const attemptedUsername = req.body.username;
    const allUsers = await User.findAll();
    const allUsernames = await allUsers.map((username) =>
      username.get({ plain: true })
    );

    for (let i = 0; i < allUsernames.length; i++) {
      if (attemptedUsername == allUsernames[i].username) {
        res.status(500).json({ message: 'Someone already has that username' });
        return;
      }
    }

    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.userId = newUser.id; //!
      req.session.username = newUser.username; //!
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
        username: req.body.username,
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
      req.session.username = user.username;
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
