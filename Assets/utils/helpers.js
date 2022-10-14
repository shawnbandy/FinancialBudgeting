module.exports = {
  budgetCheck: (type) => {
    return type === 'budget' ? true : false;
  },
  expenseCheck: (type) => {
    return type === 'expense' ? true : false;
  },
  incomeCheck: (type) => {
    return type === 'income' ? true : false;
  },
  switch: (value, options) => {
    this.switch_value = value;
    return options.fn(this);
  },
  case: (value, options) => {
    if (value == this.switch_value) {
      return options.fn(this);
    }
  },
};
