package io.onemsg.chat.model

import io.circe.{Decoder, Encoder, Json}

/**
 * Flow header (string or JSON object). Represented as circe Json because the
 * upstream scala-sttp oneOf codegen does not compile for this shape.
 */
final case class SendFlowRequestHeader(value: Json) extends AnyVal

object SendFlowRequestHeader {
  def apply(text: String): SendFlowRequestHeader = SendFlowRequestHeader(Json.fromString(text))

  implicit val encoderSendFlowRequestHeader: Encoder[SendFlowRequestHeader] =
    Encoder.instance(_.value)
  implicit val decoderSendFlowRequestHeader: Decoder[SendFlowRequestHeader] =
    Decoder[Json].map(SendFlowRequestHeader.apply)
}
