package io.onemsg.sdk

import java.net.URI
import java.net.URLEncoder
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse
import java.nio.charset.StandardCharsets

class PlatformError(val status: Int, val responseBody: String) extends Exception(s"Platform API HTTP $status")

/** Platform API client. Bearer API key, not the WhatsApp channel token. */
class PlatformClient(rawKey: String, rawBase: String = "https://api.1msg.io") {
  val apiKey: String = rawKey.trim
  val baseUrl: String = (if (rawBase == null || rawBase.trim.isEmpty) "https://api.1msg.io" else rawBase).replaceAll("/+$", "")
  require(apiKey.nonEmpty, "apiKey is required")
  private val http = HttpClient.newHttpClient()

  def call(operationId: String, path: Map[String, String] = Map.empty, query: Map[String, String] = Map.empty, body: Option[String] = None): String = {
    val spec = PlatformClient.operations(operationId)
    var urlPath = spec.path
    spec.pathParams.foreach { name =>
      val value = path.getOrElse(name, throw new IllegalArgumentException(s"missing path param $name"))
      urlPath = urlPath.replace("{" + name + "}", URLEncoder.encode(value, StandardCharsets.UTF_8))
    }
    val queryText = query.map { case (key, value) =>
      URLEncoder.encode(key, StandardCharsets.UTF_8) + "=" + URLEncoder.encode(value, StandardCharsets.UTF_8)
    }.mkString("&")
    val endpoint = baseUrl + urlPath + (if (queryText.isEmpty) "" else "?" + queryText)
    val builder = HttpRequest.newBuilder(URI.create(endpoint))
      .header("Authorization", "Bearer " + apiKey).header("Accept", "application/json")
    val request = body match {
      case Some(json) => builder.header("Content-Type", "application/json").method(spec.method, HttpRequest.BodyPublishers.ofString(json)).build()
      case None => builder.method(spec.method, HttpRequest.BodyPublishers.noBody()).build()
    }
    val response = http.send(request, HttpResponse.BodyHandlers.ofString())
    if (response.statusCode() < 200 || response.statusCode() >= 300) throw new PlatformError(response.statusCode(), response.body())
    response.body()
  }

  def listInboxChannels(path: Map[String, String] = Map.empty, query: Map[String, String] = Map.empty, body: Option[String] = None): String = call("listInboxChannels", path, query, body)
  def listInboxChannelAssignees(path: Map[String, String] = Map.empty, query: Map[String, String] = Map.empty, body: Option[String] = None): String = call("listInboxChannelAssignees", path, query, body)
  def listInboxConversations(path: Map[String, String] = Map.empty, query: Map[String, String] = Map.empty, body: Option[String] = None): String = call("listInboxConversations", path, query, body)
  def searchInboxConversations(path: Map[String, String] = Map.empty, query: Map[String, String] = Map.empty, body: Option[String] = None): String = call("searchInboxConversations", path, query, body)
  def countInboxConversations(path: Map[String, String] = Map.empty, query: Map[String, String] = Map.empty, body: Option[String] = None): String = call("countInboxConversations", path, query, body)
  def getInboxConversation(path: Map[String, String] = Map.empty, query: Map[String, String] = Map.empty, body: Option[String] = None): String = call("getInboxConversation", path, query, body)
  def updateInboxConversationStatus(path: Map[String, String] = Map.empty, query: Map[String, String] = Map.empty, body: Option[String] = None): String = call("updateInboxConversationStatus", path, query, body)
  def updateInboxConversationAssignee(path: Map[String, String] = Map.empty, query: Map[String, String] = Map.empty, body: Option[String] = None): String = call("updateInboxConversationAssignee", path, query, body)
  def listInboxConversationMessages(path: Map[String, String] = Map.empty, query: Map[String, String] = Map.empty, body: Option[String] = None): String = call("listInboxConversationMessages", path, query, body)
  def blockInboxContact(path: Map[String, String] = Map.empty, query: Map[String, String] = Map.empty, body: Option[String] = None): String = call("blockInboxContact", path, query, body)
  def unblockInboxContact(path: Map[String, String] = Map.empty, query: Map[String, String] = Map.empty, body: Option[String] = None): String = call("unblockInboxContact", path, query, body)
  def renameInboxConversation(path: Map[String, String] = Map.empty, query: Map[String, String] = Map.empty, body: Option[String] = None): String = call("renameInboxConversation", path, query, body)
  def listInboxContacts(path: Map[String, String] = Map.empty, query: Map[String, String] = Map.empty, body: Option[String] = None): String = call("listInboxContacts", path, query, body)
  def getInboxWebhook(path: Map[String, String] = Map.empty, query: Map[String, String] = Map.empty, body: Option[String] = None): String = call("getInboxWebhook", path, query, body)
  def setInboxWebhook(path: Map[String, String] = Map.empty, query: Map[String, String] = Map.empty, body: Option[String] = None): String = call("setInboxWebhook", path, query, body)
  def deleteInboxWebhook(path: Map[String, String] = Map.empty, query: Map[String, String] = Map.empty, body: Option[String] = None): String = call("deleteInboxWebhook", path, query, body)
  def rotateInboxWebhookSecret(path: Map[String, String] = Map.empty, query: Map[String, String] = Map.empty, body: Option[String] = None): String = call("rotateInboxWebhookSecret", path, query, body)
  def listCampaignSegments(path: Map[String, String] = Map.empty, query: Map[String, String] = Map.empty, body: Option[String] = None): String = call("listCampaignSegments", path, query, body)
  def createCampaignSegment(path: Map[String, String] = Map.empty, query: Map[String, String] = Map.empty, body: Option[String] = None): String = call("createCampaignSegment", path, query, body)
  def getCampaignSegment(path: Map[String, String] = Map.empty, query: Map[String, String] = Map.empty, body: Option[String] = None): String = call("getCampaignSegment", path, query, body)
  def updateCampaignSegment(path: Map[String, String] = Map.empty, query: Map[String, String] = Map.empty, body: Option[String] = None): String = call("updateCampaignSegment", path, query, body)
  def deleteCampaignSegment(path: Map[String, String] = Map.empty, query: Map[String, String] = Map.empty, body: Option[String] = None): String = call("deleteCampaignSegment", path, query, body)
  def listCampaignSegmentMembers(path: Map[String, String] = Map.empty, query: Map[String, String] = Map.empty, body: Option[String] = None): String = call("listCampaignSegmentMembers", path, query, body)
  def addCampaignSegmentMembers(path: Map[String, String] = Map.empty, query: Map[String, String] = Map.empty, body: Option[String] = None): String = call("addCampaignSegmentMembers", path, query, body)
  def replaceCampaignSegmentMembers(path: Map[String, String] = Map.empty, query: Map[String, String] = Map.empty, body: Option[String] = None): String = call("replaceCampaignSegmentMembers", path, query, body)
  def removeCampaignSegmentMembers(path: Map[String, String] = Map.empty, query: Map[String, String] = Map.empty, body: Option[String] = None): String = call("removeCampaignSegmentMembers", path, query, body)
  def updateCampaignSegmentMember(path: Map[String, String] = Map.empty, query: Map[String, String] = Map.empty, body: Option[String] = None): String = call("updateCampaignSegmentMember", path, query, body)
  def listCampaigns(path: Map[String, String] = Map.empty, query: Map[String, String] = Map.empty, body: Option[String] = None): String = call("listCampaigns", path, query, body)
  def createCampaign(path: Map[String, String] = Map.empty, query: Map[String, String] = Map.empty, body: Option[String] = None): String = call("createCampaign", path, query, body)
  def getCampaign(path: Map[String, String] = Map.empty, query: Map[String, String] = Map.empty, body: Option[String] = None): String = call("getCampaign", path, query, body)
  def updateCampaign(path: Map[String, String] = Map.empty, query: Map[String, String] = Map.empty, body: Option[String] = None): String = call("updateCampaign", path, query, body)
  def previewCampaign(path: Map[String, String] = Map.empty, query: Map[String, String] = Map.empty, body: Option[String] = None): String = call("previewCampaign", path, query, body)
  def sendCampaign(path: Map[String, String] = Map.empty, query: Map[String, String] = Map.empty, body: Option[String] = None): String = call("sendCampaign", path, query, body)
  def scheduleCampaign(path: Map[String, String] = Map.empty, query: Map[String, String] = Map.empty, body: Option[String] = None): String = call("scheduleCampaign", path, query, body)
  def unscheduleCampaign(path: Map[String, String] = Map.empty, query: Map[String, String] = Map.empty, body: Option[String] = None): String = call("unscheduleCampaign", path, query, body)
  def pauseCampaign(path: Map[String, String] = Map.empty, query: Map[String, String] = Map.empty, body: Option[String] = None): String = call("pauseCampaign", path, query, body)
  def resumeCampaign(path: Map[String, String] = Map.empty, query: Map[String, String] = Map.empty, body: Option[String] = None): String = call("resumeCampaign", path, query, body)
  def completeCampaign(path: Map[String, String] = Map.empty, query: Map[String, String] = Map.empty, body: Option[String] = None): String = call("completeCampaign", path, query, body)
  def testCampaign(path: Map[String, String] = Map.empty, query: Map[String, String] = Map.empty, body: Option[String] = None): String = call("testCampaign", path, query, body)
  def getCampaignAnalytics(path: Map[String, String] = Map.empty, query: Map[String, String] = Map.empty, body: Option[String] = None): String = call("getCampaignAnalytics", path, query, body)
  def listCampaignAnalyticsRecipients(path: Map[String, String] = Map.empty, query: Map[String, String] = Map.empty, body: Option[String] = None): String = call("listCampaignAnalyticsRecipients", path, query, body)
  def listCampaignAnalyticsReplies(path: Map[String, String] = Map.empty, query: Map[String, String] = Map.empty, body: Option[String] = None): String = call("listCampaignAnalyticsReplies", path, query, body)
  def listCampaignAnalyticsErrors(path: Map[String, String] = Map.empty, query: Map[String, String] = Map.empty, body: Option[String] = None): String = call("listCampaignAnalyticsErrors", path, query, body)
}

private case class Op(method: String, path: String, pathParams: Seq[String])

object PlatformClient {
  private val operations: Map[String, Op] = Map(
    "listInboxChannels" -> Op("GET", "/api/v1/inbox/channels", Seq()),
    "listInboxChannelAssignees" -> Op("GET", "/api/v1/inbox/channels/{channelId}/assignees", Seq("channelId")),
    "listInboxConversations" -> Op("GET", "/api/v1/inbox/conversations", Seq()),
    "searchInboxConversations" -> Op("GET", "/api/v1/inbox/conversations/search", Seq()),
    "countInboxConversations" -> Op("GET", "/api/v1/inbox/conversations/counts", Seq()),
    "getInboxConversation" -> Op("GET", "/api/v1/inbox/conversations/{conversationId}", Seq("conversationId")),
    "updateInboxConversationStatus" -> Op("PATCH", "/api/v1/inbox/conversations/{conversationId}/status", Seq("conversationId")),
    "updateInboxConversationAssignee" -> Op("PATCH", "/api/v1/inbox/conversations/{conversationId}/assignee", Seq("conversationId")),
    "listInboxConversationMessages" -> Op("GET", "/api/v1/inbox/conversations/{conversationId}/messages", Seq("conversationId")),
    "blockInboxContact" -> Op("POST", "/api/v1/inbox/conversations/{conversationId}/block", Seq("conversationId")),
    "unblockInboxContact" -> Op("POST", "/api/v1/inbox/conversations/{conversationId}/unblock", Seq("conversationId")),
    "renameInboxConversation" -> Op("PATCH", "/api/v1/inbox/conversations/{conversationId}/title", Seq("conversationId")),
    "listInboxContacts" -> Op("GET", "/api/v1/inbox/contacts", Seq()),
    "getInboxWebhook" -> Op("GET", "/api/v1/inbox/webhook", Seq()),
    "setInboxWebhook" -> Op("PUT", "/api/v1/inbox/webhook", Seq()),
    "deleteInboxWebhook" -> Op("DELETE", "/api/v1/inbox/webhook", Seq()),
    "rotateInboxWebhookSecret" -> Op("POST", "/api/v1/inbox/webhook/secret", Seq()),
    "listCampaignSegments" -> Op("GET", "/api/v1/campaigns/segments", Seq()),
    "createCampaignSegment" -> Op("POST", "/api/v1/campaigns/segments", Seq()),
    "getCampaignSegment" -> Op("GET", "/api/v1/campaigns/segments/{segmentId}", Seq("segmentId")),
    "updateCampaignSegment" -> Op("PATCH", "/api/v1/campaigns/segments/{segmentId}", Seq("segmentId")),
    "deleteCampaignSegment" -> Op("DELETE", "/api/v1/campaigns/segments/{segmentId}", Seq("segmentId")),
    "listCampaignSegmentMembers" -> Op("GET", "/api/v1/campaigns/segments/{segmentId}/members", Seq("segmentId")),
    "addCampaignSegmentMembers" -> Op("POST", "/api/v1/campaigns/segments/{segmentId}/members", Seq("segmentId")),
    "replaceCampaignSegmentMembers" -> Op("PUT", "/api/v1/campaigns/segments/{segmentId}/members", Seq("segmentId")),
    "removeCampaignSegmentMembers" -> Op("DELETE", "/api/v1/campaigns/segments/{segmentId}/members", Seq("segmentId")),
    "updateCampaignSegmentMember" -> Op("PATCH", "/api/v1/campaigns/segments/{segmentId}/members/{memberId}", Seq("segmentId", "memberId")),
    "listCampaigns" -> Op("GET", "/api/v1/campaigns", Seq()),
    "createCampaign" -> Op("POST", "/api/v1/campaigns", Seq()),
    "getCampaign" -> Op("GET", "/api/v1/campaigns/{campaignId}", Seq("campaignId")),
    "updateCampaign" -> Op("PATCH", "/api/v1/campaigns/{campaignId}", Seq("campaignId")),
    "previewCampaign" -> Op("GET", "/api/v1/campaigns/{campaignId}/preview", Seq("campaignId")),
    "sendCampaign" -> Op("POST", "/api/v1/campaigns/{campaignId}/send", Seq("campaignId")),
    "scheduleCampaign" -> Op("PATCH", "/api/v1/campaigns/{campaignId}/schedule", Seq("campaignId")),
    "unscheduleCampaign" -> Op("POST", "/api/v1/campaigns/{campaignId}/unschedule", Seq("campaignId")),
    "pauseCampaign" -> Op("POST", "/api/v1/campaigns/{campaignId}/pause", Seq("campaignId")),
    "resumeCampaign" -> Op("POST", "/api/v1/campaigns/{campaignId}/resume", Seq("campaignId")),
    "completeCampaign" -> Op("POST", "/api/v1/campaigns/{campaignId}/complete", Seq("campaignId")),
    "testCampaign" -> Op("POST", "/api/v1/campaigns/{campaignId}/test", Seq("campaignId")),
    "getCampaignAnalytics" -> Op("GET", "/api/v1/campaigns/{campaignId}/analytics", Seq("campaignId")),
    "listCampaignAnalyticsRecipients" -> Op("GET", "/api/v1/campaigns/{campaignId}/analytics/recipients", Seq("campaignId")),
    "listCampaignAnalyticsReplies" -> Op("GET", "/api/v1/campaigns/{campaignId}/analytics/replies", Seq("campaignId")),
    "listCampaignAnalyticsErrors" -> Op("GET", "/api/v1/campaigns/{campaignId}/analytics/errors", Seq("campaignId")),
  )
}
