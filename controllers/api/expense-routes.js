const router = require('express').Router();
const { User, Expenses, Household, Income } = require('../../models');

router.post('/create', async (req, res) => {
  try {
    const newExpense = await Expenses.create({
      name: req.body.name,
      amount: req.body.amount,
      budget_id: req.body.parentID,
      household_id: req.session.householdID,
    });
    console.log(newExpense);
    res.status(200).json(newExpense);
  } catch (err) {
    res.status(404).json({ message: 'Unable to create a new expense. ' + err });
  }
});

router.put('/edit/:id', async (req, res) => {
  try {
    const updateExpense = await Expenses.update(
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
    res.status(200).json(updateExpense);
  } catch (err) {
    res.status(404).json({ message: 'Unable to create a new expense. ' + err });
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    const deleteExpense = await Expenses.destroy({
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
