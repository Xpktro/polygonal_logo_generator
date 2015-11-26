generateNewSeed = ->
  charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  text = (charset.charAt(Math.floor(Math.random() * charset.length)) for _ in [0..5])
  document.getElementById('seed').value = text.join ''

draw = ->
  Math.seedrandom(document.getElementById('seed').value);
  p.draw(
    Number.parseInt($('#polygons').val()), 
    (color.value for color in $ '.color'),
    $('#blendModes').val(),
    Number.parseInt($('#minimumPoints').val()),
    Number.parseInt($('#maximumPoints').val())
  )

$ ->
  paper.install window
  window.p = new PolygonPainter 'main'
  generateNewSeed()
  draw()
  $('.color').colorPicker()

  $('#addcolor').on 'click', (event) ->
    event.preventDefault()
    $('#colors input').last().clone().appendTo '#colors'
    $().colorPicker.destroy()
    $('.color').colorPicker()

  $('#remcolor').on 'click', (event) ->
    event.preventDefault()
    inputs = $ '#colors input'
    if inputs.length > 1
      inputs.last().remove()
