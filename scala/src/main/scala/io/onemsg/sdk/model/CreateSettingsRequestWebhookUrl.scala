package io.onemsg.sdk.model

import io.circe.{Decoder, Encoder, Json}

/** String or array kept as circe Json. scala-sttp oneOf codegen does not compile here. */
final case class CreateSettingsRequestWebhookUrl(value: Json) extends AnyVal

object CreateSettingsRequestWebhookUrl {
  def apply(text: String): CreateSettingsRequestWebhookUrl = CreateSettingsRequestWebhookUrl(Json.fromString(text))

  implicit val encoderCreateSettingsRequestWebhookUrl: Encoder[CreateSettingsRequestWebhookUrl] =
    Encoder.instance(_.value)
  implicit val decoderCreateSettingsRequestWebhookUrl: Decoder[CreateSettingsRequestWebhookUrl] =
    Decoder[Json].map(CreateSettingsRequestWebhookUrl.apply)
}
