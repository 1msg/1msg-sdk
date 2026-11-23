using System; using System.Collections.Generic; using System.Net.Http; using System.Text; using System.Threading.Tasks; using Newtonsoft.Json;

namespace OneMsg.Sdk
{
    public class PlatformError : Exception
    {
        public int Status { get; }
        public string ResponseBody { get; }
        public PlatformError(int status, string responseBody) : base("Platform API HTTP " + status)
        {
            Status = status;
            ResponseBody = responseBody;
        }
    }

    /// <summary>Platform API client. Bearer API key, not the WhatsApp channel token.</summary>
    public class PlatformClient
    {
        private readonly HttpClient http = new HttpClient();
        public string ApiKey { get; }
        public string BaseUrl { get; }

        public PlatformClient(string apiKey, string baseUrl = "https://api.1msg.io")
        {
            if (string.IsNullOrWhiteSpace(apiKey)) throw new ArgumentException("apiKey is required");
            ApiKey = apiKey.Trim();
            BaseUrl = (string.IsNullOrWhiteSpace(baseUrl) ? "https://api.1msg.io" : baseUrl).TrimEnd('/');
        }

        public async Task<string> CallAsync(string operationId, IDictionary<string, string> path = null, IDictionary<string, string> query = null, object body = null)
        {
            Op spec;
            if (!Operations.TryGetValue(operationId, out spec)) throw new ArgumentException("unknown platform operation " + operationId);
            var urlPath = spec.Path;
            foreach (var name in spec.PathParams)
            {
                string value;
                if (path == null || !path.TryGetValue(name, out value)) throw new ArgumentException("missing path param " + name);
                urlPath = urlPath.Replace("{" + name + "}", Uri.EscapeDataString(value));
            }
            var endpoint = BaseUrl + urlPath;
            if (query != null && query.Count > 0)
            {
                var pairs = new List<string>();
                foreach (var entry in query) pairs.Add(Uri.EscapeDataString(entry.Key) + "=" + Uri.EscapeDataString(entry.Value));
                endpoint += "?" + string.Join("&", pairs);
            }
            var request = new HttpRequestMessage(new HttpMethod(spec.Method), endpoint);
            request.Headers.TryAddWithoutValidation("Authorization", "Bearer " + ApiKey);
            request.Headers.TryAddWithoutValidation("Accept", "application/json");
            if (body != null) request.Content = new StringContent(JsonConvert.SerializeObject(body), Encoding.UTF8, "application/json");
            var response = await http.SendAsync(request);
            var text = await response.Content.ReadAsStringAsync();
            if (!response.IsSuccessStatusCode) throw new PlatformError((int)response.StatusCode, text);
            return text;
        }

        public Task<string> listInboxChannelsAsync(IDictionary<string, string> path = null, IDictionary<string, string> query = null, object body = null) { return CallAsync("listInboxChannels", path, query, body); }
        public Task<string> listInboxChannelAssigneesAsync(IDictionary<string, string> path = null, IDictionary<string, string> query = null, object body = null) { return CallAsync("listInboxChannelAssignees", path, query, body); }
        public Task<string> listInboxConversationsAsync(IDictionary<string, string> path = null, IDictionary<string, string> query = null, object body = null) { return CallAsync("listInboxConversations", path, query, body); }
        public Task<string> searchInboxConversationsAsync(IDictionary<string, string> path = null, IDictionary<string, string> query = null, object body = null) { return CallAsync("searchInboxConversations", path, query, body); }
        public Task<string> countInboxConversationsAsync(IDictionary<string, string> path = null, IDictionary<string, string> query = null, object body = null) { return CallAsync("countInboxConversations", path, query, body); }
        public Task<string> getInboxConversationAsync(IDictionary<string, string> path = null, IDictionary<string, string> query = null, object body = null) { return CallAsync("getInboxConversation", path, query, body); }
        public Task<string> updateInboxConversationStatusAsync(IDictionary<string, string> path = null, IDictionary<string, string> query = null, object body = null) { return CallAsync("updateInboxConversationStatus", path, query, body); }
        public Task<string> updateInboxConversationAssigneeAsync(IDictionary<string, string> path = null, IDictionary<string, string> query = null, object body = null) { return CallAsync("updateInboxConversationAssignee", path, query, body); }
        public Task<string> listInboxConversationMessagesAsync(IDictionary<string, string> path = null, IDictionary<string, string> query = null, object body = null) { return CallAsync("listInboxConversationMessages", path, query, body); }
        public Task<string> blockInboxContactAsync(IDictionary<string, string> path = null, IDictionary<string, string> query = null, object body = null) { return CallAsync("blockInboxContact", path, query, body); }
        public Task<string> unblockInboxContactAsync(IDictionary<string, string> path = null, IDictionary<string, string> query = null, object body = null) { return CallAsync("unblockInboxContact", path, query, body); }
        public Task<string> renameInboxConversationAsync(IDictionary<string, string> path = null, IDictionary<string, string> query = null, object body = null) { return CallAsync("renameInboxConversation", path, query, body); }
        public Task<string> listInboxContactsAsync(IDictionary<string, string> path = null, IDictionary<string, string> query = null, object body = null) { return CallAsync("listInboxContacts", path, query, body); }
        public Task<string> getInboxWebhookAsync(IDictionary<string, string> path = null, IDictionary<string, string> query = null, object body = null) { return CallAsync("getInboxWebhook", path, query, body); }
        public Task<string> setInboxWebhookAsync(IDictionary<string, string> path = null, IDictionary<string, string> query = null, object body = null) { return CallAsync("setInboxWebhook", path, query, body); }
        public Task<string> deleteInboxWebhookAsync(IDictionary<string, string> path = null, IDictionary<string, string> query = null, object body = null) { return CallAsync("deleteInboxWebhook", path, query, body); }
        public Task<string> rotateInboxWebhookSecretAsync(IDictionary<string, string> path = null, IDictionary<string, string> query = null, object body = null) { return CallAsync("rotateInboxWebhookSecret", path, query, body); }
        public Task<string> listCampaignSegmentsAsync(IDictionary<string, string> path = null, IDictionary<string, string> query = null, object body = null) { return CallAsync("listCampaignSegments", path, query, body); }
        public Task<string> createCampaignSegmentAsync(IDictionary<string, string> path = null, IDictionary<string, string> query = null, object body = null) { return CallAsync("createCampaignSegment", path, query, body); }
        public Task<string> getCampaignSegmentAsync(IDictionary<string, string> path = null, IDictionary<string, string> query = null, object body = null) { return CallAsync("getCampaignSegment", path, query, body); }
        public Task<string> updateCampaignSegmentAsync(IDictionary<string, string> path = null, IDictionary<string, string> query = null, object body = null) { return CallAsync("updateCampaignSegment", path, query, body); }
        public Task<string> deleteCampaignSegmentAsync(IDictionary<string, string> path = null, IDictionary<string, string> query = null, object body = null) { return CallAsync("deleteCampaignSegment", path, query, body); }
        public Task<string> listCampaignSegmentMembersAsync(IDictionary<string, string> path = null, IDictionary<string, string> query = null, object body = null) { return CallAsync("listCampaignSegmentMembers", path, query, body); }
        public Task<string> addCampaignSegmentMembersAsync(IDictionary<string, string> path = null, IDictionary<string, string> query = null, object body = null) { return CallAsync("addCampaignSegmentMembers", path, query, body); }
        public Task<string> replaceCampaignSegmentMembersAsync(IDictionary<string, string> path = null, IDictionary<string, string> query = null, object body = null) { return CallAsync("replaceCampaignSegmentMembers", path, query, body); }
        public Task<string> removeCampaignSegmentMembersAsync(IDictionary<string, string> path = null, IDictionary<string, string> query = null, object body = null) { return CallAsync("removeCampaignSegmentMembers", path, query, body); }
        public Task<string> updateCampaignSegmentMemberAsync(IDictionary<string, string> path = null, IDictionary<string, string> query = null, object body = null) { return CallAsync("updateCampaignSegmentMember", path, query, body); }
        public Task<string> listCampaignsAsync(IDictionary<string, string> path = null, IDictionary<string, string> query = null, object body = null) { return CallAsync("listCampaigns", path, query, body); }
        public Task<string> createCampaignAsync(IDictionary<string, string> path = null, IDictionary<string, string> query = null, object body = null) { return CallAsync("createCampaign", path, query, body); }
        public Task<string> getCampaignAsync(IDictionary<string, string> path = null, IDictionary<string, string> query = null, object body = null) { return CallAsync("getCampaign", path, query, body); }
        public Task<string> updateCampaignAsync(IDictionary<string, string> path = null, IDictionary<string, string> query = null, object body = null) { return CallAsync("updateCampaign", path, query, body); }
        public Task<string> previewCampaignAsync(IDictionary<string, string> path = null, IDictionary<string, string> query = null, object body = null) { return CallAsync("previewCampaign", path, query, body); }
        public Task<string> sendCampaignAsync(IDictionary<string, string> path = null, IDictionary<string, string> query = null, object body = null) { return CallAsync("sendCampaign", path, query, body); }
        public Task<string> scheduleCampaignAsync(IDictionary<string, string> path = null, IDictionary<string, string> query = null, object body = null) { return CallAsync("scheduleCampaign", path, query, body); }
        public Task<string> unscheduleCampaignAsync(IDictionary<string, string> path = null, IDictionary<string, string> query = null, object body = null) { return CallAsync("unscheduleCampaign", path, query, body); }
        public Task<string> pauseCampaignAsync(IDictionary<string, string> path = null, IDictionary<string, string> query = null, object body = null) { return CallAsync("pauseCampaign", path, query, body); }
        public Task<string> resumeCampaignAsync(IDictionary<string, string> path = null, IDictionary<string, string> query = null, object body = null) { return CallAsync("resumeCampaign", path, query, body); }
        public Task<string> completeCampaignAsync(IDictionary<string, string> path = null, IDictionary<string, string> query = null, object body = null) { return CallAsync("completeCampaign", path, query, body); }
        public Task<string> testCampaignAsync(IDictionary<string, string> path = null, IDictionary<string, string> query = null, object body = null) { return CallAsync("testCampaign", path, query, body); }
        public Task<string> getCampaignAnalyticsAsync(IDictionary<string, string> path = null, IDictionary<string, string> query = null, object body = null) { return CallAsync("getCampaignAnalytics", path, query, body); }
        public Task<string> listCampaignAnalyticsRecipientsAsync(IDictionary<string, string> path = null, IDictionary<string, string> query = null, object body = null) { return CallAsync("listCampaignAnalyticsRecipients", path, query, body); }
        public Task<string> listCampaignAnalyticsRepliesAsync(IDictionary<string, string> path = null, IDictionary<string, string> query = null, object body = null) { return CallAsync("listCampaignAnalyticsReplies", path, query, body); }
        public Task<string> listCampaignAnalyticsErrorsAsync(IDictionary<string, string> path = null, IDictionary<string, string> query = null, object body = null) { return CallAsync("listCampaignAnalyticsErrors", path, query, body); }

        private class Op
        {
            public Op(string method, string path, string[] pathParams) { Method = method; Path = path; PathParams = pathParams; }
            public string Method { get; }
            public string Path { get; }
            public string[] PathParams { get; }
        }

        private static readonly Dictionary<string, Op> Operations = new Dictionary<string, Op>
        {
            { "listInboxChannels", new Op("GET", "/api/v1/inbox/channels", new string[] {  }) },
            { "listInboxChannelAssignees", new Op("GET", "/api/v1/inbox/channels/{channelId}/assignees", new string[] { "channelId" }) },
            { "listInboxConversations", new Op("GET", "/api/v1/inbox/conversations", new string[] {  }) },
            { "searchInboxConversations", new Op("GET", "/api/v1/inbox/conversations/search", new string[] {  }) },
            { "countInboxConversations", new Op("GET", "/api/v1/inbox/conversations/counts", new string[] {  }) },
            { "getInboxConversation", new Op("GET", "/api/v1/inbox/conversations/{conversationId}", new string[] { "conversationId" }) },
            { "updateInboxConversationStatus", new Op("PATCH", "/api/v1/inbox/conversations/{conversationId}/status", new string[] { "conversationId" }) },
            { "updateInboxConversationAssignee", new Op("PATCH", "/api/v1/inbox/conversations/{conversationId}/assignee", new string[] { "conversationId" }) },
            { "listInboxConversationMessages", new Op("GET", "/api/v1/inbox/conversations/{conversationId}/messages", new string[] { "conversationId" }) },
            { "blockInboxContact", new Op("POST", "/api/v1/inbox/conversations/{conversationId}/block", new string[] { "conversationId" }) },
            { "unblockInboxContact", new Op("POST", "/api/v1/inbox/conversations/{conversationId}/unblock", new string[] { "conversationId" }) },
            { "renameInboxConversation", new Op("PATCH", "/api/v1/inbox/conversations/{conversationId}/title", new string[] { "conversationId" }) },
            { "listInboxContacts", new Op("GET", "/api/v1/inbox/contacts", new string[] {  }) },
            { "getInboxWebhook", new Op("GET", "/api/v1/inbox/webhook", new string[] {  }) },
            { "setInboxWebhook", new Op("PUT", "/api/v1/inbox/webhook", new string[] {  }) },
            { "deleteInboxWebhook", new Op("DELETE", "/api/v1/inbox/webhook", new string[] {  }) },
            { "rotateInboxWebhookSecret", new Op("POST", "/api/v1/inbox/webhook/secret", new string[] {  }) },
            { "listCampaignSegments", new Op("GET", "/api/v1/campaigns/segments", new string[] {  }) },
            { "createCampaignSegment", new Op("POST", "/api/v1/campaigns/segments", new string[] {  }) },
            { "getCampaignSegment", new Op("GET", "/api/v1/campaigns/segments/{segmentId}", new string[] { "segmentId" }) },
            { "updateCampaignSegment", new Op("PATCH", "/api/v1/campaigns/segments/{segmentId}", new string[] { "segmentId" }) },
            { "deleteCampaignSegment", new Op("DELETE", "/api/v1/campaigns/segments/{segmentId}", new string[] { "segmentId" }) },
            { "listCampaignSegmentMembers", new Op("GET", "/api/v1/campaigns/segments/{segmentId}/members", new string[] { "segmentId" }) },
            { "addCampaignSegmentMembers", new Op("POST", "/api/v1/campaigns/segments/{segmentId}/members", new string[] { "segmentId" }) },
            { "replaceCampaignSegmentMembers", new Op("PUT", "/api/v1/campaigns/segments/{segmentId}/members", new string[] { "segmentId" }) },
            { "removeCampaignSegmentMembers", new Op("DELETE", "/api/v1/campaigns/segments/{segmentId}/members", new string[] { "segmentId" }) },
            { "updateCampaignSegmentMember", new Op("PATCH", "/api/v1/campaigns/segments/{segmentId}/members/{memberId}", new string[] { "segmentId", "memberId" }) },
            { "listCampaigns", new Op("GET", "/api/v1/campaigns", new string[] {  }) },
            { "createCampaign", new Op("POST", "/api/v1/campaigns", new string[] {  }) },
            { "getCampaign", new Op("GET", "/api/v1/campaigns/{campaignId}", new string[] { "campaignId" }) },
            { "updateCampaign", new Op("PATCH", "/api/v1/campaigns/{campaignId}", new string[] { "campaignId" }) },
            { "previewCampaign", new Op("GET", "/api/v1/campaigns/{campaignId}/preview", new string[] { "campaignId" }) },
            { "sendCampaign", new Op("POST", "/api/v1/campaigns/{campaignId}/send", new string[] { "campaignId" }) },
            { "scheduleCampaign", new Op("PATCH", "/api/v1/campaigns/{campaignId}/schedule", new string[] { "campaignId" }) },
            { "unscheduleCampaign", new Op("POST", "/api/v1/campaigns/{campaignId}/unschedule", new string[] { "campaignId" }) },
            { "pauseCampaign", new Op("POST", "/api/v1/campaigns/{campaignId}/pause", new string[] { "campaignId" }) },
            { "resumeCampaign", new Op("POST", "/api/v1/campaigns/{campaignId}/resume", new string[] { "campaignId" }) },
            { "completeCampaign", new Op("POST", "/api/v1/campaigns/{campaignId}/complete", new string[] { "campaignId" }) },
            { "testCampaign", new Op("POST", "/api/v1/campaigns/{campaignId}/test", new string[] { "campaignId" }) },
            { "getCampaignAnalytics", new Op("GET", "/api/v1/campaigns/{campaignId}/analytics", new string[] { "campaignId" }) },
            { "listCampaignAnalyticsRecipients", new Op("GET", "/api/v1/campaigns/{campaignId}/analytics/recipients", new string[] { "campaignId" }) },
            { "listCampaignAnalyticsReplies", new Op("GET", "/api/v1/campaigns/{campaignId}/analytics/replies", new string[] { "campaignId" }) },
            { "listCampaignAnalyticsErrors", new Op("GET", "/api/v1/campaigns/{campaignId}/analytics/errors", new string[] { "campaignId" }) },
        };
    }
}
