package io.onemsg.sdk

import java.net.URLEncoder
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.RequestBody.Companion.toRequestBody

class PlatformError(val status: Int, val responseBody: String) : Exception("Platform API HTTP $status")

/** Platform API client. Bearer API key, not the WhatsApp channel token. */
class PlatformClient(apiKey: String, baseUrl: String = "https://api.1msg.io") {
    private val apiKey: String = apiKey.trim()
    private val baseUrl: String = (if (baseUrl.isBlank()) "https://api.1msg.io" else baseUrl).trimEnd('/')
    private val http = OkHttpClient()

    init { require(this.apiKey.isNotEmpty()) { "apiKey is required" } }

    fun call(operationId: String, path: Map<String, String> = emptyMap(), query: Map<String, String> = emptyMap(), body: String? = null): String {
        val spec = operations.getValue(operationId)
        var urlPath = spec.path
        for (name in spec.pathParams) {
            val value = path[name] ?: throw IllegalArgumentException("missing path param $name")
            urlPath = urlPath.replace("{$name}", URLEncoder.encode(value, "UTF-8"))
        }
        val queryText = query.entries.joinToString("&") { (key, value) ->
            URLEncoder.encode(key, "UTF-8") + "=" + URLEncoder.encode(value, "UTF-8")
        }
        val endpoint = baseUrl + urlPath + if (queryText.isEmpty()) "" else "?$queryText"
        val payload = when {
            body != null -> body.toRequestBody("application/json".toMediaType())
            spec.method == "POST" || spec.method == "PUT" || spec.method == "PATCH" ->
                "".toRequestBody("application/json".toMediaType())
            else -> null
        }
        val request = Request.Builder().url(endpoint)
            .header("Authorization", "Bearer $apiKey").header("Accept", "application/json")
            .method(spec.method, payload).build()
        http.newCall(request).execute().use { response ->
            val text = response.body.string()
            if (!response.isSuccessful) throw PlatformError(response.code, text)
            return text
        }
    }

    fun listInboxChannels(path: Map<String, String> = emptyMap(), query: Map<String, String> = emptyMap(), body: String? = null): String = call("listInboxChannels", path, query, body)
    fun listInboxChannelAssignees(path: Map<String, String> = emptyMap(), query: Map<String, String> = emptyMap(), body: String? = null): String = call("listInboxChannelAssignees", path, query, body)
    fun listInboxConversations(path: Map<String, String> = emptyMap(), query: Map<String, String> = emptyMap(), body: String? = null): String = call("listInboxConversations", path, query, body)
    fun searchInboxConversations(path: Map<String, String> = emptyMap(), query: Map<String, String> = emptyMap(), body: String? = null): String = call("searchInboxConversations", path, query, body)
    fun countInboxConversations(path: Map<String, String> = emptyMap(), query: Map<String, String> = emptyMap(), body: String? = null): String = call("countInboxConversations", path, query, body)
    fun getInboxConversation(path: Map<String, String> = emptyMap(), query: Map<String, String> = emptyMap(), body: String? = null): String = call("getInboxConversation", path, query, body)
    fun updateInboxConversationStatus(path: Map<String, String> = emptyMap(), query: Map<String, String> = emptyMap(), body: String? = null): String = call("updateInboxConversationStatus", path, query, body)
    fun updateInboxConversationAssignee(path: Map<String, String> = emptyMap(), query: Map<String, String> = emptyMap(), body: String? = null): String = call("updateInboxConversationAssignee", path, query, body)
    fun listInboxConversationMessages(path: Map<String, String> = emptyMap(), query: Map<String, String> = emptyMap(), body: String? = null): String = call("listInboxConversationMessages", path, query, body)
    fun blockInboxContact(path: Map<String, String> = emptyMap(), query: Map<String, String> = emptyMap(), body: String? = null): String = call("blockInboxContact", path, query, body)
    fun unblockInboxContact(path: Map<String, String> = emptyMap(), query: Map<String, String> = emptyMap(), body: String? = null): String = call("unblockInboxContact", path, query, body)
    fun renameInboxConversation(path: Map<String, String> = emptyMap(), query: Map<String, String> = emptyMap(), body: String? = null): String = call("renameInboxConversation", path, query, body)
    fun listInboxContacts(path: Map<String, String> = emptyMap(), query: Map<String, String> = emptyMap(), body: String? = null): String = call("listInboxContacts", path, query, body)
    fun getInboxWebhook(path: Map<String, String> = emptyMap(), query: Map<String, String> = emptyMap(), body: String? = null): String = call("getInboxWebhook", path, query, body)
    fun setInboxWebhook(path: Map<String, String> = emptyMap(), query: Map<String, String> = emptyMap(), body: String? = null): String = call("setInboxWebhook", path, query, body)
    fun deleteInboxWebhook(path: Map<String, String> = emptyMap(), query: Map<String, String> = emptyMap(), body: String? = null): String = call("deleteInboxWebhook", path, query, body)
    fun rotateInboxWebhookSecret(path: Map<String, String> = emptyMap(), query: Map<String, String> = emptyMap(), body: String? = null): String = call("rotateInboxWebhookSecret", path, query, body)
    fun listCampaignSegments(path: Map<String, String> = emptyMap(), query: Map<String, String> = emptyMap(), body: String? = null): String = call("listCampaignSegments", path, query, body)
    fun createCampaignSegment(path: Map<String, String> = emptyMap(), query: Map<String, String> = emptyMap(), body: String? = null): String = call("createCampaignSegment", path, query, body)
    fun getCampaignSegment(path: Map<String, String> = emptyMap(), query: Map<String, String> = emptyMap(), body: String? = null): String = call("getCampaignSegment", path, query, body)
    fun updateCampaignSegment(path: Map<String, String> = emptyMap(), query: Map<String, String> = emptyMap(), body: String? = null): String = call("updateCampaignSegment", path, query, body)
    fun deleteCampaignSegment(path: Map<String, String> = emptyMap(), query: Map<String, String> = emptyMap(), body: String? = null): String = call("deleteCampaignSegment", path, query, body)
    fun listCampaignSegmentMembers(path: Map<String, String> = emptyMap(), query: Map<String, String> = emptyMap(), body: String? = null): String = call("listCampaignSegmentMembers", path, query, body)
    fun addCampaignSegmentMembers(path: Map<String, String> = emptyMap(), query: Map<String, String> = emptyMap(), body: String? = null): String = call("addCampaignSegmentMembers", path, query, body)
    fun replaceCampaignSegmentMembers(path: Map<String, String> = emptyMap(), query: Map<String, String> = emptyMap(), body: String? = null): String = call("replaceCampaignSegmentMembers", path, query, body)
    fun removeCampaignSegmentMembers(path: Map<String, String> = emptyMap(), query: Map<String, String> = emptyMap(), body: String? = null): String = call("removeCampaignSegmentMembers", path, query, body)
    fun updateCampaignSegmentMember(path: Map<String, String> = emptyMap(), query: Map<String, String> = emptyMap(), body: String? = null): String = call("updateCampaignSegmentMember", path, query, body)
    fun listCampaigns(path: Map<String, String> = emptyMap(), query: Map<String, String> = emptyMap(), body: String? = null): String = call("listCampaigns", path, query, body)
    fun createCampaign(path: Map<String, String> = emptyMap(), query: Map<String, String> = emptyMap(), body: String? = null): String = call("createCampaign", path, query, body)
    fun getCampaign(path: Map<String, String> = emptyMap(), query: Map<String, String> = emptyMap(), body: String? = null): String = call("getCampaign", path, query, body)
    fun updateCampaign(path: Map<String, String> = emptyMap(), query: Map<String, String> = emptyMap(), body: String? = null): String = call("updateCampaign", path, query, body)
    fun previewCampaign(path: Map<String, String> = emptyMap(), query: Map<String, String> = emptyMap(), body: String? = null): String = call("previewCampaign", path, query, body)
    fun sendCampaign(path: Map<String, String> = emptyMap(), query: Map<String, String> = emptyMap(), body: String? = null): String = call("sendCampaign", path, query, body)
    fun scheduleCampaign(path: Map<String, String> = emptyMap(), query: Map<String, String> = emptyMap(), body: String? = null): String = call("scheduleCampaign", path, query, body)
    fun unscheduleCampaign(path: Map<String, String> = emptyMap(), query: Map<String, String> = emptyMap(), body: String? = null): String = call("unscheduleCampaign", path, query, body)
    fun pauseCampaign(path: Map<String, String> = emptyMap(), query: Map<String, String> = emptyMap(), body: String? = null): String = call("pauseCampaign", path, query, body)
    fun resumeCampaign(path: Map<String, String> = emptyMap(), query: Map<String, String> = emptyMap(), body: String? = null): String = call("resumeCampaign", path, query, body)
    fun completeCampaign(path: Map<String, String> = emptyMap(), query: Map<String, String> = emptyMap(), body: String? = null): String = call("completeCampaign", path, query, body)
    fun testCampaign(path: Map<String, String> = emptyMap(), query: Map<String, String> = emptyMap(), body: String? = null): String = call("testCampaign", path, query, body)
    fun getCampaignAnalytics(path: Map<String, String> = emptyMap(), query: Map<String, String> = emptyMap(), body: String? = null): String = call("getCampaignAnalytics", path, query, body)
    fun listCampaignAnalyticsRecipients(path: Map<String, String> = emptyMap(), query: Map<String, String> = emptyMap(), body: String? = null): String = call("listCampaignAnalyticsRecipients", path, query, body)
    fun listCampaignAnalyticsReplies(path: Map<String, String> = emptyMap(), query: Map<String, String> = emptyMap(), body: String? = null): String = call("listCampaignAnalyticsReplies", path, query, body)
    fun listCampaignAnalyticsErrors(path: Map<String, String> = emptyMap(), query: Map<String, String> = emptyMap(), body: String? = null): String = call("listCampaignAnalyticsErrors", path, query, body)
}

private data class Op(val method: String, val path: String, val pathParams: List<String>)

private val operations = mapOf(
        "listInboxChannels" to Op("GET", "/api/v1/inbox/channels", listOf()),
        "listInboxChannelAssignees" to Op("GET", "/api/v1/inbox/channels/{channelId}/assignees", listOf("channelId")),
        "listInboxConversations" to Op("GET", "/api/v1/inbox/conversations", listOf()),
        "searchInboxConversations" to Op("GET", "/api/v1/inbox/conversations/search", listOf()),
        "countInboxConversations" to Op("GET", "/api/v1/inbox/conversations/counts", listOf()),
        "getInboxConversation" to Op("GET", "/api/v1/inbox/conversations/{conversationId}", listOf("conversationId")),
        "updateInboxConversationStatus" to Op("PATCH", "/api/v1/inbox/conversations/{conversationId}/status", listOf("conversationId")),
        "updateInboxConversationAssignee" to Op("PATCH", "/api/v1/inbox/conversations/{conversationId}/assignee", listOf("conversationId")),
        "listInboxConversationMessages" to Op("GET", "/api/v1/inbox/conversations/{conversationId}/messages", listOf("conversationId")),
        "blockInboxContact" to Op("POST", "/api/v1/inbox/conversations/{conversationId}/block", listOf("conversationId")),
        "unblockInboxContact" to Op("POST", "/api/v1/inbox/conversations/{conversationId}/unblock", listOf("conversationId")),
        "renameInboxConversation" to Op("PATCH", "/api/v1/inbox/conversations/{conversationId}/title", listOf("conversationId")),
        "listInboxContacts" to Op("GET", "/api/v1/inbox/contacts", listOf()),
        "getInboxWebhook" to Op("GET", "/api/v1/inbox/webhook", listOf()),
        "setInboxWebhook" to Op("PUT", "/api/v1/inbox/webhook", listOf()),
        "deleteInboxWebhook" to Op("DELETE", "/api/v1/inbox/webhook", listOf()),
        "rotateInboxWebhookSecret" to Op("POST", "/api/v1/inbox/webhook/secret", listOf()),
        "listCampaignSegments" to Op("GET", "/api/v1/campaigns/segments", listOf()),
        "createCampaignSegment" to Op("POST", "/api/v1/campaigns/segments", listOf()),
        "getCampaignSegment" to Op("GET", "/api/v1/campaigns/segments/{segmentId}", listOf("segmentId")),
        "updateCampaignSegment" to Op("PATCH", "/api/v1/campaigns/segments/{segmentId}", listOf("segmentId")),
        "deleteCampaignSegment" to Op("DELETE", "/api/v1/campaigns/segments/{segmentId}", listOf("segmentId")),
        "listCampaignSegmentMembers" to Op("GET", "/api/v1/campaigns/segments/{segmentId}/members", listOf("segmentId")),
        "addCampaignSegmentMembers" to Op("POST", "/api/v1/campaigns/segments/{segmentId}/members", listOf("segmentId")),
        "replaceCampaignSegmentMembers" to Op("PUT", "/api/v1/campaigns/segments/{segmentId}/members", listOf("segmentId")),
        "removeCampaignSegmentMembers" to Op("DELETE", "/api/v1/campaigns/segments/{segmentId}/members", listOf("segmentId")),
        "updateCampaignSegmentMember" to Op("PATCH", "/api/v1/campaigns/segments/{segmentId}/members/{memberId}", listOf("segmentId", "memberId")),
        "listCampaigns" to Op("GET", "/api/v1/campaigns", listOf()),
        "createCampaign" to Op("POST", "/api/v1/campaigns", listOf()),
        "getCampaign" to Op("GET", "/api/v1/campaigns/{campaignId}", listOf("campaignId")),
        "updateCampaign" to Op("PATCH", "/api/v1/campaigns/{campaignId}", listOf("campaignId")),
        "previewCampaign" to Op("GET", "/api/v1/campaigns/{campaignId}/preview", listOf("campaignId")),
        "sendCampaign" to Op("POST", "/api/v1/campaigns/{campaignId}/send", listOf("campaignId")),
        "scheduleCampaign" to Op("PATCH", "/api/v1/campaigns/{campaignId}/schedule", listOf("campaignId")),
        "unscheduleCampaign" to Op("POST", "/api/v1/campaigns/{campaignId}/unschedule", listOf("campaignId")),
        "pauseCampaign" to Op("POST", "/api/v1/campaigns/{campaignId}/pause", listOf("campaignId")),
        "resumeCampaign" to Op("POST", "/api/v1/campaigns/{campaignId}/resume", listOf("campaignId")),
        "completeCampaign" to Op("POST", "/api/v1/campaigns/{campaignId}/complete", listOf("campaignId")),
        "testCampaign" to Op("POST", "/api/v1/campaigns/{campaignId}/test", listOf("campaignId")),
        "getCampaignAnalytics" to Op("GET", "/api/v1/campaigns/{campaignId}/analytics", listOf("campaignId")),
        "listCampaignAnalyticsRecipients" to Op("GET", "/api/v1/campaigns/{campaignId}/analytics/recipients", listOf("campaignId")),
        "listCampaignAnalyticsReplies" to Op("GET", "/api/v1/campaigns/{campaignId}/analytics/replies", listOf("campaignId")),
        "listCampaignAnalyticsErrors" to Op("GET", "/api/v1/campaigns/{campaignId}/analytics/errors", listOf("campaignId")),
)
