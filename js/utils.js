var randomInt;

Array.prototype.randIndex = function() {
  return Math.floor(Math.random() * this.length);
};

Array.prototype.randChoose = function() {
  return this[this.randIndex()];
};

randomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
