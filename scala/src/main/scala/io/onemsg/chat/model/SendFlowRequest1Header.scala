package io.onemsg.chat.model

import io.circe.{Decoder, Encoder, Json}

/**
 * Flow header (string or JSON object). Represented as circe Json because the
 * upstream scala-sttp oneOf codegen does not compile for this shape.
 */
final case class SendFlowRequest1Header(value: Json) extends AnyVal

object SendFlowRequest1Header {
  def apply(text: String): SendFlowRequest1Header = SendFlowRequest1Header(Json.fromString(text))

  implicit val encoderSendFlowRequest1Header: Encoder[SendFlowRequest1Header] =
    Encoder.instance(_.value)
  implicit val decoderSendFlowRequest1Header: Decoder[SendFlowRequest1Header] =
    Decoder[Json].map(SendFlowRequest1Header.apply)
}
