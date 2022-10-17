const router = require('express').Router();
const { User, Expense, Household, Income } = require('../../models');

router.post('/create', async (req, res) => {
  console.log('hh reached');
  try {
    const newHousehold = await Household.create({
      name: req.body.name,
      user_id: req.session.userId,
    });

    console.log(newHousehold.id);

    req.session.save(() => {
      req.session.householdID = newHousehold.id;
      res.status(200).json(newHousehold);
    });
  } catch (err) {
    res
      .status(404)
      .json({ message: 'Unable to create a new Household. ' + err });
  }
});

router.put('/edit/:id', async (req, res) => {
  try {
    const updateHousehold = await Household.update(
      {
        name: req.body.name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(updateHousehold);
  } catch (err) {
    res
      .status(404)
      .json({ message: 'Unable to create a new Household. ' + err });
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    const deleteHousehold = await Household.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: 'Deleted' });
  } catch {
    res.status(404).json({ message: 'Unable to create a new income. ' + err });
  }
});

module.exports = router;
