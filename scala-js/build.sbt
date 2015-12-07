name := "scala-js"

version := "1.0"

scalaVersion := "2.11.7"

enablePlugins(ScalaJSPlugin)

resolvers += "Sonatype snapshots" at "https://oss.sonatype.org/content/repositories/snapshots/"

libraryDependencies ++= Seq(
  "com.github.yoeluk" %%% "paper-scala-js" % "0.5-SNAPSHOT",
  "com.lihaoyi" %%% "scalarx" % "0.2.8"
)

libraryDependencies += "be.doeraene" %%% "scalajs-jquery" % "0.8.0"

persistLauncher in Compile := true

persistLauncher in Test := false

skip in packageJSDependencies := false

scalaJSStage in Global := FastOptStage