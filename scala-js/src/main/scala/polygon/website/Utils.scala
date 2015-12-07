package polygon.website

import scala.scalajs.js.annotation.JSExportAll
import scala.scalajs.js.Math
import scala.scalajs.js

@JSExportAll
object Utils {
  implicit class ArrayWithRandom[T](val self: js.Array[T]) {
    def randIndex: Integer = Math.floor(Math.random() * self.length).toInt
    def randChoose: T = self(self.randIndex)
  }

  def randomInt(min: Integer, max: Integer) = Math.floor(Math.random() * (max - min + 1)).toInt + min

}

