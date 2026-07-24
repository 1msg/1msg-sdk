version := "1.0.2"
name := "sdk-scala"
organization := "io.1msg"

scalaVersion := "2.13.16"
crossScalaVersions := Seq(scalaVersion.value, "2.12.20")

libraryDependencies ++= Seq(
  "com.softwaremill.sttp.client3" %% "core" % "3.3.18",
  "com.softwaremill.sttp.client3" %% "circe" % "3.3.18",
  "io.circe" %% "circe-generic" % "0.14.1"
)

scalacOptions := Seq(
  "-unchecked",
  "-deprecation",
  "-feature"
)

// Maven Central metadata: see maven-central.sbt
