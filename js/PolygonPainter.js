var PolygonPainter;

PolygonPainter = (function() {
  function PolygonPainter(canvas) {
    paper.setup(canvas);
    this.polygons = [];
    this.colors = ['#af93b3', '#e1a7b4', '#ede3e0', '#6b8aca', '#0f1860'];
    this.blendModes = ['multiply', 'screen', 'overlay', 'hue', 'saturation', 'color', 'lighter', 'darker'];
    this.minimumPoints = 3;
    this.maximumPoints = 6;
    this.width = view.size.width;
    this.height = view.size.height;
    this.center = new Point(this.width / 2.0, this.height / 2.0);
    this.initialize();
  }

  PolygonPainter.prototype.initialize = function() {
    var polygon, segment;
    polygon = new Path.RegularPolygon(this.center, 12, (this.width / 2.0) * .95);
    this.points = (function() {
      var _i, _len, _ref, _results;
      _ref = polygon.segments;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        segment = _ref[_i];
        _results.push(segment.point);
      }
      return _results;
    })();
    return view.draw();
  };

  PolygonPainter.prototype.draw = function(n, colors, blendModes, minimumPoints, maximumPoints) {
    var polygon, _, _i, _j, _len, _ref;
    _ref = this.polygons;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      polygon = _ref[_i];
      polygon.remove();
    }
    this.polygons = [];
    this.colors = colors || ['#af93b3', '#e1a7b4', '#ede3e0', '#6b8aca', '#0f1860'];
    this.blendModes = blendModes || ['multiply', 'screen', 'overlay', 'hue', 'saturation', 'color', 'lighter', 'darker'];
    this.minimumPoints = minimumPoints != null ? minimumPoints : this.minimumPoints;
    this.maximumPoints = maximumPoints != null ? maximumPoints : this.maximumPoints;
    for (_ = _j = 1; 1 <= n ? _j <= n : _j >= n; _ = 1 <= n ? ++_j : --_j) {
      this.randomPolygon(this.points);
    }
    return view.draw();
  };

  PolygonPainter.prototype.randomPolygon = function(points) {
    var index, path, pointsTemp, pointsToRemove, _, _i;
    pointsTemp = this.points.slice(0);
    pointsToRemove = randomInt(this.points.length - this.maximumPoints, this.points.length - this.minimumPoints);
    for (_ = _i = 0; 0 <= pointsToRemove ? _i <= pointsToRemove : _i >= pointsToRemove; _ = 0 <= pointsToRemove ? ++_i : --_i) {
      index = pointsTemp.randIndex();
      pointsTemp.splice(index, 1);
    }
    path = new Path(pointsTemp);
    path.closed = true;
    path.fillColor = this.colors.randChoose();
    path.fillColor.alpha = .7;
    path.blendMode = this.blendModes.randChoose();
    this.polygons.push(path);
    return view.draw();
  };

  return PolygonPainter;

})();
