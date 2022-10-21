const router = require('express').Router();
const { User, Expense, Household, Income } = require('../../models');

router.post('/create', async (req, res) => {
  try {
    const newIncome = Income.create({
      name: req.body.name,
      amount: req.body.amount,
      household_id: req.session.householdID,
    });

    res.status(200).json(newIncome);
  } catch (err) {
    res.status(404).json({ message: 'Unable to create a new income. ' + err });
  }
});

router.put('/edit/:id', async (req, res) => {
  try {
    const updateIncome = await Income.update(
      {
        name: req.body.editName,
        amount: req.body.editAmount,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(updateIncome);
  } catch (err) {
    res.status(404).json({ message: 'Unable to create a new income. ' + err });
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    const deleteIncome = await Income.destroy({
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
