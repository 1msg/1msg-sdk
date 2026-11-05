package io.onemsg.sdk.model

import io.circe.{Decoder, Encoder, Json}

/** String or array kept as circe Json. scala-sttp oneOf codegen does not compile here. */
final case class SetWebhookRequestWebhookUrl(value: Json) extends AnyVal

object SetWebhookRequestWebhookUrl {
  def apply(text: String): SetWebhookRequestWebhookUrl = SetWebhookRequestWebhookUrl(Json.fromString(text))

  implicit val encoderSetWebhookRequestWebhookUrl: Encoder[SetWebhookRequestWebhookUrl] =
    Encoder.instance(_.value)
  implicit val decoderSetWebhookRequestWebhookUrl: Decoder[SetWebhookRequestWebhookUrl] =
    Decoder[Json].map(SetWebhookRequestWebhookUrl.apply)
}
