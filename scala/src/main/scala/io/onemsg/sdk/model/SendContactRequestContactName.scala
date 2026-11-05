package io.onemsg.sdk.model

import io.circe.{Decoder, Encoder, Json}

/** String or array kept as circe Json. scala-sttp oneOf codegen does not compile here. */
final case class SendContactRequestContactName(value: Json) extends AnyVal

object SendContactRequestContactName {
  def apply(text: String): SendContactRequestContactName = SendContactRequestContactName(Json.fromString(text))

  implicit val encoderSendContactRequestContactName: Encoder[SendContactRequestContactName] =
    Encoder.instance(_.value)
  implicit val decoderSendContactRequestContactName: Decoder[SendContactRequestContactName] =
    Decoder[Json].map(SendContactRequestContactName.apply)
}
