const router = require('express').Router();
const { User, Expense, Household, Income, Budget } = require('../../models');

router.post('/create', async (req, res) => {
  try {
    const newBudget = await Budget.create({
      name: req.body.name,
      amount: req.body.amount,
      household_id: req.session.householdID,
    });

    res.status(200).json(newBudget);
  } catch (err) {
    res.status(404).json({ message: 'Unable to create a new Budget. ' + err });
  }
});

router.put('/edit/:id', async (req, res) => {
  try {
    const updateBudget = await Budget.update(
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
    res.status(200).json(updateBudget);
  } catch (err) {
    res.status(404).json({ message: 'Unable to create a new Budget. ' + err });
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    const deleteBudget = await Budget.destroy({
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
