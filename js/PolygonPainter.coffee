class PolygonPainter
  constructor: (canvas) ->
    paper.setup canvas
    @polygons = []
    @colors = ['#af93b3', '#e1a7b4', '#ede3e0', '#6b8aca', '#0f1860']
    @blendModes = ['multiply', 'screen', 'overlay', 'hue', 'saturation',
    'color', 'lighter', 'darker']
    @minimumPoints = 3
    @maximumPoints = 6
    @width = view.size.width
    @height = view.size.height
    @center = new Point @width/2.0, @height/2.0
    @initialize()

  initialize: ->
    polygon = new Path.RegularPolygon @center, 12, (@width / 2.0) * .95
    @points = (segment.point for segment in polygon.segments)

    # for segment in polygon.segments
    #   circle = new Path.Circle segment.point, 3
    #   circle.fillColor = 'black'
    #   circle.fillColor.alpha = .3
    #   @points.push segment.point

    view.draw()

  draw: (n, colors, blendModes, minimumPoints, maximumPoints) ->
    (polygon.remove() for polygon in @polygons)
    @polygons = []
    @colors = colors or ['#af93b3', '#e1a7b4', '#ede3e0', '#6b8aca', '#0f1860']
    @blendModes = blendModes or ['multiply', 'screen', 'overlay', 'hue',
    'saturation', 'color', 'lighter', 'darker']
    @minimumPoints = minimumPoints ? @minimumPoints
    @maximumPoints = maximumPoints ? @maximumPoints
    for _ in [1..n]
      @randomPolygon @points
    view.draw()

  randomPolygon: (points) ->
    pointsTemp = @points[..]
    pointsToRemove = randomInt @points.length - @maximumPoints, @points.length - @minimumPoints
    for _ in [0..pointsToRemove]
      index = pointsTemp.randIndex()
      pointsTemp.splice index, 1

    path = new Path pointsTemp
    path.closed = true
    path.fillColor = @colors.randChoose()
    path.fillColor.alpha = .7
    path.blendMode = @blendModes.randChoose()
    @polygons.push path
    view.draw()
