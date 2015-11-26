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
  var color;
  Math.seedrandom(document.getElementById('seed').value);
  return p.draw(Number.parseInt($('#polygons').val()), (function() {
    var _i, _len, _ref, _results;
    _ref = $('.color');
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      color = _ref[_i];
      _results.push(color.value);
    }
    return _results;
  })(), $('#blendModes').val(), Number.parseInt($('#minimumPoints').val()), Number.parseInt($('#maximumPoints').val()));
};

$(function() {
  paper.install(window);
  window.p = new PolygonPainter('main');
  generateNewSeed();
  draw();
  $('.color').colorPicker();
  $('#addcolor').on('click', function(event) {
    event.preventDefault();
    $('#colors input').last().clone().appendTo('#colors');
    $().colorPicker.destroy();
    return $('.color').colorPicker();
  });
  return $('#remcolor').on('click', function(event) {
    var inputs;
    event.preventDefault();
    inputs = $('#colors input');
    if (inputs.length > 1) {
      return inputs.last().remove();
    }
  });
});
