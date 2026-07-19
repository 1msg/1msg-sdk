// Copied into packages/sdk-scala/generated/ by postProcessGeneratedScalaSdk.
// Publishes io.1msg:sdk-scala to Maven Central (Central Publisher Portal).

ThisBuild / organization := "io.1msg"
ThisBuild / organizationName := "1MSG"
ThisBuild / organizationHomepage := Some(url("https://1msg.io"))

ThisBuild / scmInfo := Some(
  ScmInfo(
    url("https://github.com/1msg/1msg-sdk"),
    "scm:git:git://github.com/1msg/1msg-sdk.git",
    "scm:git:ssh://git@github.com/1msg/1msg-sdk.git"
  )
)

ThisBuild / developers := List(
  Developer(
    id = "1msg",
    name = "1MSG",
    email = "support@1msg.io",
    url = url("https://1msg.io")
  )
)

ThisBuild / description := "Public Scala SDK for the 1msg.io extended WhatsApp API"
ThisBuild / licenses := List("MIT" -> url("https://opensource.org/licenses/MIT"))
ThisBuild / homepage := Some(url("https://github.com/1msg/1msg-sdk"))
ThisBuild / versionScheme := Some("early-semver")

ThisBuild / publishMavenStyle := true
ThisBuild / pomIncludeRepository := { _ => false }

ThisBuild / sonatypeCredentialHost := "central.sonatype.com"
ThisBuild / publishTo := sonatypePublishToBundle.value
