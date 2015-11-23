Array::randIndex = ->
    Math.floor(Math.random() * this.length)

Array::randChoose = ->
  this[this.randIndex()]

randomInt = (min, max) ->
  Math.floor(Math.random() * (max - min + 1)) + min
