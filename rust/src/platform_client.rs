//! Platform API client. Bearer API key, not the WhatsApp channel token.
use std::fmt;

#[derive(Debug)]
pub struct PlatformError { pub status: u16, pub body: String }
impl fmt::Display for PlatformError { fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result { write!(f, "Platform API HTTP {}", self.status) } }
impl std::error::Error for PlatformError {}

struct Op { id: &'static str, method: &'static str, path: &'static str, path_params: &'static [&'static str] }
const OPERATIONS: &[Op] = &[
    Op { id: "listInboxChannels", method: "GET", path: "/api/v1/inbox/channels", path_params: &[] },
    Op { id: "listInboxChannelAssignees", method: "GET", path: "/api/v1/inbox/channels/{channelId}/assignees", path_params: &["channelId"] },
    Op { id: "listInboxConversations", method: "GET", path: "/api/v1/inbox/conversations", path_params: &[] },
    Op { id: "searchInboxConversations", method: "GET", path: "/api/v1/inbox/conversations/search", path_params: &[] },
    Op { id: "countInboxConversations", method: "GET", path: "/api/v1/inbox/conversations/counts", path_params: &[] },
    Op { id: "getInboxConversation", method: "GET", path: "/api/v1/inbox/conversations/{conversationId}", path_params: &["conversationId"] },
    Op { id: "updateInboxConversationStatus", method: "PATCH", path: "/api/v1/inbox/conversations/{conversationId}/status", path_params: &["conversationId"] },
    Op { id: "updateInboxConversationAssignee", method: "PATCH", path: "/api/v1/inbox/conversations/{conversationId}/assignee", path_params: &["conversationId"] },
    Op { id: "listInboxConversationMessages", method: "GET", path: "/api/v1/inbox/conversations/{conversationId}/messages", path_params: &["conversationId"] },
    Op { id: "blockInboxContact", method: "POST", path: "/api/v1/inbox/conversations/{conversationId}/block", path_params: &["conversationId"] },
    Op { id: "unblockInboxContact", method: "POST", path: "/api/v1/inbox/conversations/{conversationId}/unblock", path_params: &["conversationId"] },
    Op { id: "renameInboxConversation", method: "PATCH", path: "/api/v1/inbox/conversations/{conversationId}/title", path_params: &["conversationId"] },
    Op { id: "listInboxContacts", method: "GET", path: "/api/v1/inbox/contacts", path_params: &[] },
    Op { id: "getInboxWebhook", method: "GET", path: "/api/v1/inbox/webhook", path_params: &[] },
    Op { id: "setInboxWebhook", method: "PUT", path: "/api/v1/inbox/webhook", path_params: &[] },
    Op { id: "deleteInboxWebhook", method: "DELETE", path: "/api/v1/inbox/webhook", path_params: &[] },
    Op { id: "rotateInboxWebhookSecret", method: "POST", path: "/api/v1/inbox/webhook/secret", path_params: &[] },
    Op { id: "listCampaignSegments", method: "GET", path: "/api/v1/campaigns/segments", path_params: &[] },
    Op { id: "createCampaignSegment", method: "POST", path: "/api/v1/campaigns/segments", path_params: &[] },
    Op { id: "getCampaignSegment", method: "GET", path: "/api/v1/campaigns/segments/{segmentId}", path_params: &["segmentId"] },
    Op { id: "updateCampaignSegment", method: "PATCH", path: "/api/v1/campaigns/segments/{segmentId}", path_params: &["segmentId"] },
    Op { id: "deleteCampaignSegment", method: "DELETE", path: "/api/v1/campaigns/segments/{segmentId}", path_params: &["segmentId"] },
    Op { id: "listCampaignSegmentMembers", method: "GET", path: "/api/v1/campaigns/segments/{segmentId}/members", path_params: &["segmentId"] },
    Op { id: "addCampaignSegmentMembers", method: "POST", path: "/api/v1/campaigns/segments/{segmentId}/members", path_params: &["segmentId"] },
    Op { id: "replaceCampaignSegmentMembers", method: "PUT", path: "/api/v1/campaigns/segments/{segmentId}/members", path_params: &["segmentId"] },
    Op { id: "removeCampaignSegmentMembers", method: "DELETE", path: "/api/v1/campaigns/segments/{segmentId}/members", path_params: &["segmentId"] },
    Op { id: "updateCampaignSegmentMember", method: "PATCH", path: "/api/v1/campaigns/segments/{segmentId}/members/{memberId}", path_params: &["segmentId", "memberId"] },
    Op { id: "listCampaigns", method: "GET", path: "/api/v1/campaigns", path_params: &[] },
    Op { id: "createCampaign", method: "POST", path: "/api/v1/campaigns", path_params: &[] },
    Op { id: "getCampaign", method: "GET", path: "/api/v1/campaigns/{campaignId}", path_params: &["campaignId"] },
    Op { id: "updateCampaign", method: "PATCH", path: "/api/v1/campaigns/{campaignId}", path_params: &["campaignId"] },
    Op { id: "previewCampaign", method: "GET", path: "/api/v1/campaigns/{campaignId}/preview", path_params: &["campaignId"] },
    Op { id: "sendCampaign", method: "POST", path: "/api/v1/campaigns/{campaignId}/send", path_params: &["campaignId"] },
    Op { id: "scheduleCampaign", method: "PATCH", path: "/api/v1/campaigns/{campaignId}/schedule", path_params: &["campaignId"] },
    Op { id: "unscheduleCampaign", method: "POST", path: "/api/v1/campaigns/{campaignId}/unschedule", path_params: &["campaignId"] },
    Op { id: "pauseCampaign", method: "POST", path: "/api/v1/campaigns/{campaignId}/pause", path_params: &["campaignId"] },
    Op { id: "resumeCampaign", method: "POST", path: "/api/v1/campaigns/{campaignId}/resume", path_params: &["campaignId"] },
    Op { id: "completeCampaign", method: "POST", path: "/api/v1/campaigns/{campaignId}/complete", path_params: &["campaignId"] },
    Op { id: "testCampaign", method: "POST", path: "/api/v1/campaigns/{campaignId}/test", path_params: &["campaignId"] },
    Op { id: "getCampaignAnalytics", method: "GET", path: "/api/v1/campaigns/{campaignId}/analytics", path_params: &["campaignId"] },
    Op { id: "listCampaignAnalyticsRecipients", method: "GET", path: "/api/v1/campaigns/{campaignId}/analytics/recipients", path_params: &["campaignId"] },
    Op { id: "listCampaignAnalyticsReplies", method: "GET", path: "/api/v1/campaigns/{campaignId}/analytics/replies", path_params: &["campaignId"] },
    Op { id: "listCampaignAnalyticsErrors", method: "GET", path: "/api/v1/campaigns/{campaignId}/analytics/errors", path_params: &["campaignId"] },
];

pub struct PlatformClient { api_key: String, base_url: String, http: reqwest::Client }
impl PlatformClient {
    pub fn new(api_key: impl Into<String>, base_url: Option<&str>) -> Self {
        let api_key = api_key.into();
        if api_key.trim().is_empty() { panic!("api_key is required"); }
        let base_url = base_url.unwrap_or("https://api.1msg.io").trim_end_matches('/').to_string();
        Self { api_key: api_key.trim().to_string(), base_url, http: reqwest::Client::new() }
    }

    pub async fn call(&self, operation_id: &str, path: Option<&std::collections::HashMap<String, String>>, query: Option<&[(String, String)]>, body: Option<&str>) -> Result<String, PlatformError> {
        let spec = OPERATIONS.iter().find(|operation| operation.id == operation_id).ok_or_else(|| PlatformError { status: 0, body: format!("unknown platform operation {operation_id}") })?;
        let mut url_path = spec.path.to_string();
        for name in spec.path_params {
            let value = path.and_then(|values| values.get(*name)).ok_or_else(|| PlatformError { status: 0, body: format!("missing path param {name}") })?;
            url_path = url_path.replace(&format!("{{{name}}}"), &urlencoding_escape(value));
        }
        let mut endpoint = format!("{}{url_path}", self.base_url);
        if let Some(query) = query {
            if !query.is_empty() {
                let text = query.iter().map(|(key, value)| format!("{}={}", urlencoding_escape(key), urlencoding_escape(value))).collect::<Vec<_>>().join("&");
                endpoint.push('?');
                endpoint.push_str(&text);
            }
        }
        let method = reqwest::Method::from_bytes(spec.method.as_bytes()).map_err(|err| PlatformError { status: 0, body: err.to_string() })?;
        let mut request = self.http.request(method, &endpoint).header("Authorization", format!("Bearer {}", self.api_key)).header("Accept", "application/json");
        if let Some(body) = body { request = request.header("Content-Type", "application/json").body(body.to_string()); }
        let response = request.send().await.map_err(|err| PlatformError { status: 0, body: err.to_string() })?;
        let status = response.status();
        let text = response.text().await.map_err(|err| PlatformError { status: status.as_u16(), body: err.to_string() })?;
        if !status.is_success() { return Err(PlatformError { status: status.as_u16(), body: text }); }
        Ok(text)
    }

    pub async fn list_inbox_channels(&self, path: Option<&std::collections::HashMap<String, String>>, query: Option<&[(String, String)]>, body: Option<&str>) -> Result<String, PlatformError> {
        self.call("listInboxChannels", path, query, body).await
    }
    pub async fn list_inbox_channel_assignees(&self, path: Option<&std::collections::HashMap<String, String>>, query: Option<&[(String, String)]>, body: Option<&str>) -> Result<String, PlatformError> {
        self.call("listInboxChannelAssignees", path, query, body).await
    }
    pub async fn list_inbox_conversations(&self, path: Option<&std::collections::HashMap<String, String>>, query: Option<&[(String, String)]>, body: Option<&str>) -> Result<String, PlatformError> {
        self.call("listInboxConversations", path, query, body).await
    }
    pub async fn search_inbox_conversations(&self, path: Option<&std::collections::HashMap<String, String>>, query: Option<&[(String, String)]>, body: Option<&str>) -> Result<String, PlatformError> {
        self.call("searchInboxConversations", path, query, body).await
    }
    pub async fn count_inbox_conversations(&self, path: Option<&std::collections::HashMap<String, String>>, query: Option<&[(String, String)]>, body: Option<&str>) -> Result<String, PlatformError> {
        self.call("countInboxConversations", path, query, body).await
    }
    pub async fn get_inbox_conversation(&self, path: Option<&std::collections::HashMap<String, String>>, query: Option<&[(String, String)]>, body: Option<&str>) -> Result<String, PlatformError> {
        self.call("getInboxConversation", path, query, body).await
    }
    pub async fn update_inbox_conversation_status(&self, path: Option<&std::collections::HashMap<String, String>>, query: Option<&[(String, String)]>, body: Option<&str>) -> Result<String, PlatformError> {
        self.call("updateInboxConversationStatus", path, query, body).await
    }
    pub async fn update_inbox_conversation_assignee(&self, path: Option<&std::collections::HashMap<String, String>>, query: Option<&[(String, String)]>, body: Option<&str>) -> Result<String, PlatformError> {
        self.call("updateInboxConversationAssignee", path, query, body).await
    }
    pub async fn list_inbox_conversation_messages(&self, path: Option<&std::collections::HashMap<String, String>>, query: Option<&[(String, String)]>, body: Option<&str>) -> Result<String, PlatformError> {
        self.call("listInboxConversationMessages", path, query, body).await
    }
    pub async fn block_inbox_contact(&self, path: Option<&std::collections::HashMap<String, String>>, query: Option<&[(String, String)]>, body: Option<&str>) -> Result<String, PlatformError> {
        self.call("blockInboxContact", path, query, body).await
    }
    pub async fn unblock_inbox_contact(&self, path: Option<&std::collections::HashMap<String, String>>, query: Option<&[(String, String)]>, body: Option<&str>) -> Result<String, PlatformError> {
        self.call("unblockInboxContact", path, query, body).await
    }
    pub async fn rename_inbox_conversation(&self, path: Option<&std::collections::HashMap<String, String>>, query: Option<&[(String, String)]>, body: Option<&str>) -> Result<String, PlatformError> {
        self.call("renameInboxConversation", path, query, body).await
    }
    pub async fn list_inbox_contacts(&self, path: Option<&std::collections::HashMap<String, String>>, query: Option<&[(String, String)]>, body: Option<&str>) -> Result<String, PlatformError> {
        self.call("listInboxContacts", path, query, body).await
    }
    pub async fn get_inbox_webhook(&self, path: Option<&std::collections::HashMap<String, String>>, query: Option<&[(String, String)]>, body: Option<&str>) -> Result<String, PlatformError> {
        self.call("getInboxWebhook", path, query, body).await
    }
    pub async fn set_inbox_webhook(&self, path: Option<&std::collections::HashMap<String, String>>, query: Option<&[(String, String)]>, body: Option<&str>) -> Result<String, PlatformError> {
        self.call("setInboxWebhook", path, query, body).await
    }
    pub async fn delete_inbox_webhook(&self, path: Option<&std::collections::HashMap<String, String>>, query: Option<&[(String, String)]>, body: Option<&str>) -> Result<String, PlatformError> {
        self.call("deleteInboxWebhook", path, query, body).await
    }
    pub async fn rotate_inbox_webhook_secret(&self, path: Option<&std::collections::HashMap<String, String>>, query: Option<&[(String, String)]>, body: Option<&str>) -> Result<String, PlatformError> {
        self.call("rotateInboxWebhookSecret", path, query, body).await
    }
    pub async fn list_campaign_segments(&self, path: Option<&std::collections::HashMap<String, String>>, query: Option<&[(String, String)]>, body: Option<&str>) -> Result<String, PlatformError> {
        self.call("listCampaignSegments", path, query, body).await
    }
    pub async fn create_campaign_segment(&self, path: Option<&std::collections::HashMap<String, String>>, query: Option<&[(String, String)]>, body: Option<&str>) -> Result<String, PlatformError> {
        self.call("createCampaignSegment", path, query, body).await
    }
    pub async fn get_campaign_segment(&self, path: Option<&std::collections::HashMap<String, String>>, query: Option<&[(String, String)]>, body: Option<&str>) -> Result<String, PlatformError> {
        self.call("getCampaignSegment", path, query, body).await
    }
    pub async fn update_campaign_segment(&self, path: Option<&std::collections::HashMap<String, String>>, query: Option<&[(String, String)]>, body: Option<&str>) -> Result<String, PlatformError> {
        self.call("updateCampaignSegment", path, query, body).await
    }
    pub async fn delete_campaign_segment(&self, path: Option<&std::collections::HashMap<String, String>>, query: Option<&[(String, String)]>, body: Option<&str>) -> Result<String, PlatformError> {
        self.call("deleteCampaignSegment", path, query, body).await
    }
    pub async fn list_campaign_segment_members(&self, path: Option<&std::collections::HashMap<String, String>>, query: Option<&[(String, String)]>, body: Option<&str>) -> Result<String, PlatformError> {
        self.call("listCampaignSegmentMembers", path, query, body).await
    }
    pub async fn add_campaign_segment_members(&self, path: Option<&std::collections::HashMap<String, String>>, query: Option<&[(String, String)]>, body: Option<&str>) -> Result<String, PlatformError> {
        self.call("addCampaignSegmentMembers", path, query, body).await
    }
    pub async fn replace_campaign_segment_members(&self, path: Option<&std::collections::HashMap<String, String>>, query: Option<&[(String, String)]>, body: Option<&str>) -> Result<String, PlatformError> {
        self.call("replaceCampaignSegmentMembers", path, query, body).await
    }
    pub async fn remove_campaign_segment_members(&self, path: Option<&std::collections::HashMap<String, String>>, query: Option<&[(String, String)]>, body: Option<&str>) -> Result<String, PlatformError> {
        self.call("removeCampaignSegmentMembers", path, query, body).await
    }
    pub async fn update_campaign_segment_member(&self, path: Option<&std::collections::HashMap<String, String>>, query: Option<&[(String, String)]>, body: Option<&str>) -> Result<String, PlatformError> {
        self.call("updateCampaignSegmentMember", path, query, body).await
    }
    pub async fn list_campaigns(&self, path: Option<&std::collections::HashMap<String, String>>, query: Option<&[(String, String)]>, body: Option<&str>) -> Result<String, PlatformError> {
        self.call("listCampaigns", path, query, body).await
    }
    pub async fn create_campaign(&self, path: Option<&std::collections::HashMap<String, String>>, query: Option<&[(String, String)]>, body: Option<&str>) -> Result<String, PlatformError> {
        self.call("createCampaign", path, query, body).await
    }
    pub async fn get_campaign(&self, path: Option<&std::collections::HashMap<String, String>>, query: Option<&[(String, String)]>, body: Option<&str>) -> Result<String, PlatformError> {
        self.call("getCampaign", path, query, body).await
    }
    pub async fn update_campaign(&self, path: Option<&std::collections::HashMap<String, String>>, query: Option<&[(String, String)]>, body: Option<&str>) -> Result<String, PlatformError> {
        self.call("updateCampaign", path, query, body).await
    }
    pub async fn preview_campaign(&self, path: Option<&std::collections::HashMap<String, String>>, query: Option<&[(String, String)]>, body: Option<&str>) -> Result<String, PlatformError> {
        self.call("previewCampaign", path, query, body).await
    }
    pub async fn send_campaign(&self, path: Option<&std::collections::HashMap<String, String>>, query: Option<&[(String, String)]>, body: Option<&str>) -> Result<String, PlatformError> {
        self.call("sendCampaign", path, query, body).await
    }
    pub async fn schedule_campaign(&self, path: Option<&std::collections::HashMap<String, String>>, query: Option<&[(String, String)]>, body: Option<&str>) -> Result<String, PlatformError> {
        self.call("scheduleCampaign", path, query, body).await
    }
    pub async fn unschedule_campaign(&self, path: Option<&std::collections::HashMap<String, String>>, query: Option<&[(String, String)]>, body: Option<&str>) -> Result<String, PlatformError> {
        self.call("unscheduleCampaign", path, query, body).await
    }
    pub async fn pause_campaign(&self, path: Option<&std::collections::HashMap<String, String>>, query: Option<&[(String, String)]>, body: Option<&str>) -> Result<String, PlatformError> {
        self.call("pauseCampaign", path, query, body).await
    }
    pub async fn resume_campaign(&self, path: Option<&std::collections::HashMap<String, String>>, query: Option<&[(String, String)]>, body: Option<&str>) -> Result<String, PlatformError> {
        self.call("resumeCampaign", path, query, body).await
    }
    pub async fn complete_campaign(&self, path: Option<&std::collections::HashMap<String, String>>, query: Option<&[(String, String)]>, body: Option<&str>) -> Result<String, PlatformError> {
        self.call("completeCampaign", path, query, body).await
    }
    pub async fn test_campaign(&self, path: Option<&std::collections::HashMap<String, String>>, query: Option<&[(String, String)]>, body: Option<&str>) -> Result<String, PlatformError> {
        self.call("testCampaign", path, query, body).await
    }
    pub async fn get_campaign_analytics(&self, path: Option<&std::collections::HashMap<String, String>>, query: Option<&[(String, String)]>, body: Option<&str>) -> Result<String, PlatformError> {
        self.call("getCampaignAnalytics", path, query, body).await
    }
    pub async fn list_campaign_analytics_recipients(&self, path: Option<&std::collections::HashMap<String, String>>, query: Option<&[(String, String)]>, body: Option<&str>) -> Result<String, PlatformError> {
        self.call("listCampaignAnalyticsRecipients", path, query, body).await
    }
    pub async fn list_campaign_analytics_replies(&self, path: Option<&std::collections::HashMap<String, String>>, query: Option<&[(String, String)]>, body: Option<&str>) -> Result<String, PlatformError> {
        self.call("listCampaignAnalyticsReplies", path, query, body).await
    }
    pub async fn list_campaign_analytics_errors(&self, path: Option<&std::collections::HashMap<String, String>>, query: Option<&[(String, String)]>, body: Option<&str>) -> Result<String, PlatformError> {
        self.call("listCampaignAnalyticsErrors", path, query, body).await
    }
}

fn urlencoding_escape(value: &str) -> String {
    let mut out = String::new();
    for byte in value.as_bytes() {
        match byte {
            b'A'..=b'Z' | b'a'..=b'z' | b'0'..=b'9' | b'-' | b'_' | b'.' | b'~' => out.push(*byte as char),
            _ => out.push_str(&format!("%{byte:02X}")),
        }
    }
    out
}
