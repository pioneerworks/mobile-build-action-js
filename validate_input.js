let validate_inputs = function (previous_version) {
  return new Promise((resolve) => {
    if (typeof previous_version !== 'string') {
      throw new Error('previous_version is not a string');
    }
    setTimeout(() => resolve("done!"), previous_version)
  });
};

module.exports = validate_inputs;
