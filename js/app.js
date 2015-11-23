var draw, generateNewSeed;

generateNewSeed = function() {
  var charset, text, _;
  charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  text = (function() {
    var _i, _results;
    _results = [];
    for (_ = _i = 0; _i <= 5; _ = ++_i) {
      _results.push(charset.charAt(Math.floor(Math.random() * charset.length)));
    }
    return _results;
  })();
  return document.getElementById('seed').value = text.join('');
};

draw = function() {
  Math.seedrandom(document.getElementById('seed').value);
  return p.draw(5);
};

window.onload = function() {
  paper.install(window);
  window.p = new PolygonPainter('main');
  generateNewSeed();
  return draw();
};
