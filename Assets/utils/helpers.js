//*I totally copied/pasted these switch/case functions from StackOverflow
module.exports = {
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
