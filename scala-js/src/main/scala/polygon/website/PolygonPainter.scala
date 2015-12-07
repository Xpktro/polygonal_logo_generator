package polygon.website

import paperjs.Basic.Point
import paperjs.Paper
import paperjs.Paths.{Segment, Path}
import paperjs.Styling.Color
import polygon.website.Utils._

import scala.scalajs.js.Array
import scala.scalajs.js.Dynamic.{global => g}
import scala.scalajs.js.annotation.JSExport


@JSExport
class PolygonPainter {
  var polygons = Array[Path]()
  var colors = Array("#af93b3", "#e1a7b4", "#ede3e0", "#6b8aca", "#0f1860")
  var blendModes = Array("multiply", "screen", "overlay")
  var minimumPoints = 3
  var maximumPoints = 6
  var width = Paper.view.size.width
  var height = Paper.view.size.height
  var center = Point(width/2.0, height/2.0)

  val polygon = Path.RegularPolygon(center, 12, (width / 2.0)*.95)
  val points = polygon.segments.map(segment => segment.point)

  @JSExport
  def draw(n: Integer, colors: Array[String] = this.colors,
           blendModes: Array[String] = this.blendModes,
           minimumPoints: Integer = this.minimumPoints,
           maximumPoints: Integer = this.maximumPoints) = {
    for(polygon <- polygons) polygon.remove()
    this.colors = colors
    this.blendModes = blendModes
    this.minimumPoints = minimumPoints
    this.maximumPoints = maximumPoints
    for(_ <- 1 to n) this.randomPolygon()
    Paper.view.draw()
  }

  def randomPolygon() = {
    var pointsTemp = points.map(x => x)
    val pointsToRemove = Utils.randomInt(points.length - maximumPoints, points.length - minimumPoints)
    for(_ <- 1 to pointsToRemove) pointsTemp = pointsTemp diff List(pointsTemp.randChoose)
    val path = Path(pointsTemp.asInstanceOf[Array[Segment]])
    path.closed = true
    val fillColor = Color(colors.randChoose)
    fillColor.alpha = .7
    path.fillColor = fillColor
    path.blendMode = blendModes.randChoose
    polygons = polygons :+ path.asInstanceOf[Path]
//    Paper.view.draw()
  }

}
