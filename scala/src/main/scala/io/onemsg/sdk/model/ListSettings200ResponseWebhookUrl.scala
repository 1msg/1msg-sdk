package io.onemsg.sdk.model

import io.circe.{Decoder, Encoder, Json}

/** String or array kept as circe Json. scala-sttp oneOf codegen does not compile here. */
final case class ListSettings200ResponseWebhookUrl(value: Json) extends AnyVal

object ListSettings200ResponseWebhookUrl {
  def apply(text: String): ListSettings200ResponseWebhookUrl = ListSettings200ResponseWebhookUrl(Json.fromString(text))

  implicit val encoderListSettings200ResponseWebhookUrl: Encoder[ListSettings200ResponseWebhookUrl] =
    Encoder.instance(_.value)
  implicit val decoderListSettings200ResponseWebhookUrl: Decoder[ListSettings200ResponseWebhookUrl] =
    Decoder[Json].map(ListSettings200ResponseWebhookUrl.apply)
}
