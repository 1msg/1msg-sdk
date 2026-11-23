require 'json'
require 'net/http'
require 'uri'

module OneMsgSdk
  class PlatformError < StandardError
    attr_reader :status, :body
    def initialize(status, body)
      super("Platform API HTTP #{status}")
      @status = status
      @body = body
    end
  end

  # Platform API client. Bearer API key, not the WhatsApp channel token.
  class PlatformClient
    def initialize(api_key, base_url = 'https://api.1msg.io')
      raise ArgumentError, 'api_key is required' if api_key.nil? || api_key.strip.empty?
      @api_key = api_key.strip
      @base_url = (base_url.nil? || base_url.strip.empty? ? 'https://api.1msg.io' : base_url).sub(%r{/+$}, '')
      @operations = {}
      JSON.parse("[{\"id\":\"listInboxChannels\",\"method\":\"GET\",\"path\":\"/api/v1/inbox/channels\",\"pathParams\":[]},{\"id\":\"listInboxChannelAssignees\",\"method\":\"GET\",\"path\":\"/api/v1/inbox/channels/{channelId}/assignees\",\"pathParams\":[\"channelId\"]},{\"id\":\"listInboxConversations\",\"method\":\"GET\",\"path\":\"/api/v1/inbox/conversations\",\"pathParams\":[]},{\"id\":\"searchInboxConversations\",\"method\":\"GET\",\"path\":\"/api/v1/inbox/conversations/search\",\"pathParams\":[]},{\"id\":\"countInboxConversations\",\"method\":\"GET\",\"path\":\"/api/v1/inbox/conversations/counts\",\"pathParams\":[]},{\"id\":\"getInboxConversation\",\"method\":\"GET\",\"path\":\"/api/v1/inbox/conversations/{conversationId}\",\"pathParams\":[\"conversationId\"]},{\"id\":\"updateInboxConversationStatus\",\"method\":\"PATCH\",\"path\":\"/api/v1/inbox/conversations/{conversationId}/status\",\"pathParams\":[\"conversationId\"]},{\"id\":\"updateInboxConversationAssignee\",\"method\":\"PATCH\",\"path\":\"/api/v1/inbox/conversations/{conversationId}/assignee\",\"pathParams\":[\"conversationId\"]},{\"id\":\"listInboxConversationMessages\",\"method\":\"GET\",\"path\":\"/api/v1/inbox/conversations/{conversationId}/messages\",\"pathParams\":[\"conversationId\"]},{\"id\":\"blockInboxContact\",\"method\":\"POST\",\"path\":\"/api/v1/inbox/conversations/{conversationId}/block\",\"pathParams\":[\"conversationId\"]},{\"id\":\"unblockInboxContact\",\"method\":\"POST\",\"path\":\"/api/v1/inbox/conversations/{conversationId}/unblock\",\"pathParams\":[\"conversationId\"]},{\"id\":\"renameInboxConversation\",\"method\":\"PATCH\",\"path\":\"/api/v1/inbox/conversations/{conversationId}/title\",\"pathParams\":[\"conversationId\"]},{\"id\":\"listInboxContacts\",\"method\":\"GET\",\"path\":\"/api/v1/inbox/contacts\",\"pathParams\":[]},{\"id\":\"getInboxWebhook\",\"method\":\"GET\",\"path\":\"/api/v1/inbox/webhook\",\"pathParams\":[]},{\"id\":\"setInboxWebhook\",\"method\":\"PUT\",\"path\":\"/api/v1/inbox/webhook\",\"pathParams\":[]},{\"id\":\"deleteInboxWebhook\",\"method\":\"DELETE\",\"path\":\"/api/v1/inbox/webhook\",\"pathParams\":[]},{\"id\":\"rotateInboxWebhookSecret\",\"method\":\"POST\",\"path\":\"/api/v1/inbox/webhook/secret\",\"pathParams\":[]},{\"id\":\"listCampaignSegments\",\"method\":\"GET\",\"path\":\"/api/v1/campaigns/segments\",\"pathParams\":[]},{\"id\":\"createCampaignSegment\",\"method\":\"POST\",\"path\":\"/api/v1/campaigns/segments\",\"pathParams\":[]},{\"id\":\"getCampaignSegment\",\"method\":\"GET\",\"path\":\"/api/v1/campaigns/segments/{segmentId}\",\"pathParams\":[\"segmentId\"]},{\"id\":\"updateCampaignSegment\",\"method\":\"PATCH\",\"path\":\"/api/v1/campaigns/segments/{segmentId}\",\"pathParams\":[\"segmentId\"]},{\"id\":\"deleteCampaignSegment\",\"method\":\"DELETE\",\"path\":\"/api/v1/campaigns/segments/{segmentId}\",\"pathParams\":[\"segmentId\"]},{\"id\":\"listCampaignSegmentMembers\",\"method\":\"GET\",\"path\":\"/api/v1/campaigns/segments/{segmentId}/members\",\"pathParams\":[\"segmentId\"]},{\"id\":\"addCampaignSegmentMembers\",\"method\":\"POST\",\"path\":\"/api/v1/campaigns/segments/{segmentId}/members\",\"pathParams\":[\"segmentId\"]},{\"id\":\"replaceCampaignSegmentMembers\",\"method\":\"PUT\",\"path\":\"/api/v1/campaigns/segments/{segmentId}/members\",\"pathParams\":[\"segmentId\"]},{\"id\":\"removeCampaignSegmentMembers\",\"method\":\"DELETE\",\"path\":\"/api/v1/campaigns/segments/{segmentId}/members\",\"pathParams\":[\"segmentId\"]},{\"id\":\"updateCampaignSegmentMember\",\"method\":\"PATCH\",\"path\":\"/api/v1/campaigns/segments/{segmentId}/members/{memberId}\",\"pathParams\":[\"segmentId\",\"memberId\"]},{\"id\":\"listCampaigns\",\"method\":\"GET\",\"path\":\"/api/v1/campaigns\",\"pathParams\":[]},{\"id\":\"createCampaign\",\"method\":\"POST\",\"path\":\"/api/v1/campaigns\",\"pathParams\":[]},{\"id\":\"getCampaign\",\"method\":\"GET\",\"path\":\"/api/v1/campaigns/{campaignId}\",\"pathParams\":[\"campaignId\"]},{\"id\":\"updateCampaign\",\"method\":\"PATCH\",\"path\":\"/api/v1/campaigns/{campaignId}\",\"pathParams\":[\"campaignId\"]},{\"id\":\"previewCampaign\",\"method\":\"GET\",\"path\":\"/api/v1/campaigns/{campaignId}/preview\",\"pathParams\":[\"campaignId\"]},{\"id\":\"sendCampaign\",\"method\":\"POST\",\"path\":\"/api/v1/campaigns/{campaignId}/send\",\"pathParams\":[\"campaignId\"]},{\"id\":\"scheduleCampaign\",\"method\":\"PATCH\",\"path\":\"/api/v1/campaigns/{campaignId}/schedule\",\"pathParams\":[\"campaignId\"]},{\"id\":\"unscheduleCampaign\",\"method\":\"POST\",\"path\":\"/api/v1/campaigns/{campaignId}/unschedule\",\"pathParams\":[\"campaignId\"]},{\"id\":\"pauseCampaign\",\"method\":\"POST\",\"path\":\"/api/v1/campaigns/{campaignId}/pause\",\"pathParams\":[\"campaignId\"]},{\"id\":\"resumeCampaign\",\"method\":\"POST\",\"path\":\"/api/v1/campaigns/{campaignId}/resume\",\"pathParams\":[\"campaignId\"]},{\"id\":\"completeCampaign\",\"method\":\"POST\",\"path\":\"/api/v1/campaigns/{campaignId}/complete\",\"pathParams\":[\"campaignId\"]},{\"id\":\"testCampaign\",\"method\":\"POST\",\"path\":\"/api/v1/campaigns/{campaignId}/test\",\"pathParams\":[\"campaignId\"]},{\"id\":\"getCampaignAnalytics\",\"method\":\"GET\",\"path\":\"/api/v1/campaigns/{campaignId}/analytics\",\"pathParams\":[\"campaignId\"]},{\"id\":\"listCampaignAnalyticsRecipients\",\"method\":\"GET\",\"path\":\"/api/v1/campaigns/{campaignId}/analytics/recipients\",\"pathParams\":[\"campaignId\"]},{\"id\":\"listCampaignAnalyticsReplies\",\"method\":\"GET\",\"path\":\"/api/v1/campaigns/{campaignId}/analytics/replies\",\"pathParams\":[\"campaignId\"]},{\"id\":\"listCampaignAnalyticsErrors\",\"method\":\"GET\",\"path\":\"/api/v1/campaigns/{campaignId}/analytics/errors\",\"pathParams\":[\"campaignId\"]}]").each { |operation| @operations[operation['id']] = operation }
    end

    def call(operation_id, path: nil, query: nil, body: nil)
      spec = @operations[operation_id] or raise ArgumentError, "unknown platform operation #{operation_id}"
      url_path = spec['path']
      spec['pathParams'].each do |name|
        value = path && path[name]
        raise ArgumentError, "missing path param #{name}" if value.nil?
        url_path = url_path.sub('{' + name + '}', URI.encode_www_form_component(value.to_s))
      end
      url = @base_url + url_path
      url += '?' + URI.encode_www_form(query) if query && !query.empty?
      uri = URI(url)
      http = Net::HTTP.new(uri.host, uri.port)
      http.use_ssl = uri.scheme == 'https'
      request = Net::HTTPGenericRequest.new(spec['method'], !body.nil?, true, uri)
      request['Authorization'] = "Bearer #{@api_key}"
      request['Accept'] = 'application/json'
      if body
        request['Content-Type'] = 'application/json'
        request.body = JSON.generate(body)
      end
      response = http.request(request)
      text = response.body.to_s
      raise PlatformError.new(response.code.to_i, text) unless response.is_a?(Net::HTTPSuccess)
      return nil if text.empty?
      JSON.parse(text)
    end

    def list_inbox_channels(path: nil, query: nil, body: nil)
      call("listInboxChannels", path: path, query: query, body: body)
    end
    def list_inbox_channel_assignees(path: nil, query: nil, body: nil)
      call("listInboxChannelAssignees", path: path, query: query, body: body)
    end
    def list_inbox_conversations(path: nil, query: nil, body: nil)
      call("listInboxConversations", path: path, query: query, body: body)
    end
    def search_inbox_conversations(path: nil, query: nil, body: nil)
      call("searchInboxConversations", path: path, query: query, body: body)
    end
    def count_inbox_conversations(path: nil, query: nil, body: nil)
      call("countInboxConversations", path: path, query: query, body: body)
    end
    def get_inbox_conversation(path: nil, query: nil, body: nil)
      call("getInboxConversation", path: path, query: query, body: body)
    end
    def update_inbox_conversation_status(path: nil, query: nil, body: nil)
      call("updateInboxConversationStatus", path: path, query: query, body: body)
    end
    def update_inbox_conversation_assignee(path: nil, query: nil, body: nil)
      call("updateInboxConversationAssignee", path: path, query: query, body: body)
    end
    def list_inbox_conversation_messages(path: nil, query: nil, body: nil)
      call("listInboxConversationMessages", path: path, query: query, body: body)
    end
    def block_inbox_contact(path: nil, query: nil, body: nil)
      call("blockInboxContact", path: path, query: query, body: body)
    end
    def unblock_inbox_contact(path: nil, query: nil, body: nil)
      call("unblockInboxContact", path: path, query: query, body: body)
    end
    def rename_inbox_conversation(path: nil, query: nil, body: nil)
      call("renameInboxConversation", path: path, query: query, body: body)
    end
    def list_inbox_contacts(path: nil, query: nil, body: nil)
      call("listInboxContacts", path: path, query: query, body: body)
    end
    def get_inbox_webhook(path: nil, query: nil, body: nil)
      call("getInboxWebhook", path: path, query: query, body: body)
    end
    def set_inbox_webhook(path: nil, query: nil, body: nil)
      call("setInboxWebhook", path: path, query: query, body: body)
    end
    def delete_inbox_webhook(path: nil, query: nil, body: nil)
      call("deleteInboxWebhook", path: path, query: query, body: body)
    end
    def rotate_inbox_webhook_secret(path: nil, query: nil, body: nil)
      call("rotateInboxWebhookSecret", path: path, query: query, body: body)
    end
    def list_campaign_segments(path: nil, query: nil, body: nil)
      call("listCampaignSegments", path: path, query: query, body: body)
    end
    def create_campaign_segment(path: nil, query: nil, body: nil)
      call("createCampaignSegment", path: path, query: query, body: body)
    end
    def get_campaign_segment(path: nil, query: nil, body: nil)
      call("getCampaignSegment", path: path, query: query, body: body)
    end
    def update_campaign_segment(path: nil, query: nil, body: nil)
      call("updateCampaignSegment", path: path, query: query, body: body)
    end
    def delete_campaign_segment(path: nil, query: nil, body: nil)
      call("deleteCampaignSegment", path: path, query: query, body: body)
    end
    def list_campaign_segment_members(path: nil, query: nil, body: nil)
      call("listCampaignSegmentMembers", path: path, query: query, body: body)
    end
    def add_campaign_segment_members(path: nil, query: nil, body: nil)
      call("addCampaignSegmentMembers", path: path, query: query, body: body)
    end
    def replace_campaign_segment_members(path: nil, query: nil, body: nil)
      call("replaceCampaignSegmentMembers", path: path, query: query, body: body)
    end
    def remove_campaign_segment_members(path: nil, query: nil, body: nil)
      call("removeCampaignSegmentMembers", path: path, query: query, body: body)
    end
    def update_campaign_segment_member(path: nil, query: nil, body: nil)
      call("updateCampaignSegmentMember", path: path, query: query, body: body)
    end
    def list_campaigns(path: nil, query: nil, body: nil)
      call("listCampaigns", path: path, query: query, body: body)
    end
    def create_campaign(path: nil, query: nil, body: nil)
      call("createCampaign", path: path, query: query, body: body)
    end
    def get_campaign(path: nil, query: nil, body: nil)
      call("getCampaign", path: path, query: query, body: body)
    end
    def update_campaign(path: nil, query: nil, body: nil)
      call("updateCampaign", path: path, query: query, body: body)
    end
    def preview_campaign(path: nil, query: nil, body: nil)
      call("previewCampaign", path: path, query: query, body: body)
    end
    def send_campaign(path: nil, query: nil, body: nil)
      call("sendCampaign", path: path, query: query, body: body)
    end
    def schedule_campaign(path: nil, query: nil, body: nil)
      call("scheduleCampaign", path: path, query: query, body: body)
    end
    def unschedule_campaign(path: nil, query: nil, body: nil)
      call("unscheduleCampaign", path: path, query: query, body: body)
    end
    def pause_campaign(path: nil, query: nil, body: nil)
      call("pauseCampaign", path: path, query: query, body: body)
    end
    def resume_campaign(path: nil, query: nil, body: nil)
      call("resumeCampaign", path: path, query: query, body: body)
    end
    def complete_campaign(path: nil, query: nil, body: nil)
      call("completeCampaign", path: path, query: query, body: body)
    end
    def test_campaign(path: nil, query: nil, body: nil)
      call("testCampaign", path: path, query: query, body: body)
    end
    def get_campaign_analytics(path: nil, query: nil, body: nil)
      call("getCampaignAnalytics", path: path, query: query, body: body)
    end
    def list_campaign_analytics_recipients(path: nil, query: nil, body: nil)
      call("listCampaignAnalyticsRecipients", path: path, query: query, body: body)
    end
    def list_campaign_analytics_replies(path: nil, query: nil, body: nil)
      call("listCampaignAnalyticsReplies", path: path, query: query, body: body)
    end
    def list_campaign_analytics_errors(path: nil, query: nil, body: nil)
      call("listCampaignAnalyticsErrors", path: path, query: query, body: body)
    end
  end
end
