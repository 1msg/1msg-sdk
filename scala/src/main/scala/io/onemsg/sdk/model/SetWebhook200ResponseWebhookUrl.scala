package io.onemsg.sdk.model

import io.circe.{Decoder, Encoder, Json}

/** String or array kept as circe Json. scala-sttp oneOf codegen does not compile here. */
final case class SetWebhook200ResponseWebhookUrl(value: Json) extends AnyVal

object SetWebhook200ResponseWebhookUrl {
  def apply(text: String): SetWebhook200ResponseWebhookUrl = SetWebhook200ResponseWebhookUrl(Json.fromString(text))

  implicit val encoderSetWebhook200ResponseWebhookUrl: Encoder[SetWebhook200ResponseWebhookUrl] =
    Encoder.instance(_.value)
  implicit val decoderSetWebhook200ResponseWebhookUrl: Decoder[SetWebhook200ResponseWebhookUrl] =
    Decoder[Json].map(SetWebhook200ResponseWebhookUrl.apply)
}
