package io.onemsg.sdk.model

import io.circe.{Decoder, Encoder, Json}

/** String or array kept as circe Json. scala-sttp oneOf codegen does not compile here. */
final case class GetWebhook200ResponseWebhookUrl(value: Json) extends AnyVal

object GetWebhook200ResponseWebhookUrl {
  def apply(text: String): GetWebhook200ResponseWebhookUrl = GetWebhook200ResponseWebhookUrl(Json.fromString(text))

  implicit val encoderGetWebhook200ResponseWebhookUrl: Encoder[GetWebhook200ResponseWebhookUrl] =
    Encoder.instance(_.value)
  implicit val decoderGetWebhook200ResponseWebhookUrl: Decoder[GetWebhook200ResponseWebhookUrl] =
    Decoder[Json].map(GetWebhook200ResponseWebhookUrl.apply)
}
