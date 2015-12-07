package polygon.website

import org.scalajs.dom
import org.scalajs.dom.html
import org.scalajs.jquery._

import paperjs._
import scala.scalajs.js.Dynamic.{global => g}
import scala.scalajs.js.annotation.JSExportAll
import scala.scalajs.js.{Any, JSApp, Math, Array}


@JSExportAll
object Application extends JSApp {

  def generateNewSeed(): Unit = {
    val charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    var text = ""
    for (_ <- 0 to 5) {
      text += charset.charAt(Math.floor(Math.random() * charset.length).toInt).toString
    }
    jQuery("#seed").`val`(text)
  }

  def draw(): Unit = {
    val nativeMath = g.Math
    nativeMath.seedrandom(g.document.getElementById("seed").value)

    var colors = Array[String]()
    jQuery(".color").each((i: Any, y: dom.Element) => {
      colors = colors :+ y.getAttribute("value")
      y
    })

    val blendModes = jQuery("#blendModes").`val`().asInstanceOf[Array[String]]

    g.window.p.draw(
      g.parseInt(g.jQuery("#polygons").`val`()),
      colors,
      blendModes,
      g.parseInt(g.jQuery("#minimumPoints").`val`()),
      g.parseInt(g.jQuery("#maximumPoints").`val`())
    )
  }

  def main(): Unit = {
    jQuery(() => {
      Paper.setup(dom.document.getElementById("main").asInstanceOf[html.Canvas])

      g.p = new PolygonPainter().asInstanceOf[Any]

      g.jQuery(".color").colorPicker()
      generateNewSeed()
      draw()
      jQuery("#addcolor").click(() => {
        jQuery("#colors input").last().clone().appendTo("#colors")
        g.jQuery().colorPicker.destroy()
        g.jQuery(".color").colorPicker()
      })

      jQuery("#remcolor").click(() => {
        val inputs = jQuery("#colors input")
        if(inputs.length > 1) inputs.last().remove()
      })
    })
  }
}
