const router = require('express').Router();

const { User, Household } = require('../../models');

// Creating the user
router.post('/', async (req, res) => {
  console.log('reached');
  try {
    const newUser = await User.create({
      username: req.body.email,
      password: req.body.password,
    });

    const houseHold = await Household.create({
      name: 'default',
      user_id: newUser.id,
    });

    console.log(houseHold);
    console.log(houseHold.id);

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = newUser.id; //!
      req.session.email = newUser.email; //!
      req.session.householdID = houseHold.id;
      res.status(200).json((newUser, houseHold));
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
    const houseHold = await Household.findOne({
      where: {
        user_id: user.id,
      },
    });

    console.log(houseHold);

    req.session.save(() => {
      req.session.userId = user.id;
      req.session.email = user.email;
      req.session.loggedIn = true;
      req.session.householdID = houseHold.id;
      res.json({ user, houseHold, message: 'You are now logged in' });
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
