generateNewSeed = ->
  charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  text = (charset.charAt(Math.floor(Math.random() * charset.length)) for _ in [0..5])
  document.getElementById('seed').value = text.join ''

draw = ->
  Math.seedrandom(document.getElementById('seed').value);
  p.draw(5)

window.onload = ->
  paper.install window
  window.p = new PolygonPainter 'main'
  generateNewSeed()
  draw()
