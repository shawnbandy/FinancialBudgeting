const router = require('express').Router();
const { User, Expense, Household, Income } = require('../../models');

router.post('/create', async (req, res) => {
  try {
    const newExpense = Expense.create({
      name: req.body.name,
      amount: req.body.amount,
      household_id: req.body.household_id,
    });

    res.status(200).json(newExpense);
  } catch (err) {
    res.status(404).json({ message: 'Unable to create a new expense. ' + err });
  }
});

router.put('/edit/:id', async (req, res) => {
  try {
    const updateExpense = await Expense.update(
      {
        name: req.body.name,
        amount: req.body.amount,
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
    const deleteExpense = await Expense.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: 'Deleted' });
  } catch {
    res.status(404).json({ message: 'Unable to create a new income. ' + err });
  }
});

<<<<<<< HEAD
module.exports = router;
=======

module.exports = router;

>>>>>>> origin
