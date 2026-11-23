---
name: 1msg-platform
description: Call the 1MSG Platform API for Inbox and Campaigns. Use when listing or updating conversations, assignees, contacts, inbox webhooks, segments, campaigns, or campaign analytics. Do not use this for sending WhatsApp messages; that is the channel API.
---

<!-- platform-spec:45012374d9a5e725 -->

# 1MSG Platform API

Contract version **1.0.0**. This version is not the WhatsApp Business API version.

Base URL `https://api.1msg.io` (stage: `https://api.stage.1msg.io`).

Send the key from Settings → Developer → API key:

```
Authorization: Bearer 1msg_live_…
```

Inbox methods need the Inbox scope. Campaigns methods need the Campaigns scope. The key acts as the user who issued it. Sending a WhatsApp message still uses `createClient` and the channel token.

TypeScript, from the same package:

```ts
import { createPlatformClient } from '@1msg/sdk';

const platform = createPlatformClient({
  baseUrl: 'https://api.1msg.io',
  apiKey: process.env.ONE_MSG_PLATFORM_KEY,
});

await platform.call('listInboxChannels', {});
```

CLI: `1msg inbox` and `1msg campaigns`. MCP tools are prefixed `platform_`.

## inbox

- `GET /api/v1/inbox/channels` — List channels visible to this key. CLI: `1msg inbox channels`. MCP: `platform_list_inbox_channels`.
- `GET /api/v1/inbox/channels/{channelId}/assignees` — People who can be assigned on this channel. CLI: `1msg inbox assignees`. MCP: `platform_list_inbox_channel_assignees`.
- `GET /api/v1/inbox/conversations` — List conversations. CLI: `1msg inbox conversations list`. MCP: `platform_list_inbox_conversations`.
- `GET /api/v1/inbox/conversations/search` — Search conversations. CLI: `1msg inbox conversations search`. MCP: `platform_search_inbox_conversations`.
- `GET /api/v1/inbox/conversations/counts` — Conversation counts. CLI: `1msg inbox conversations counts`. MCP: `platform_count_inbox_conversations`.
- `GET /api/v1/inbox/conversations/{conversationId}` — One conversation. CLI: `1msg inbox conversations get`. MCP: `platform_get_inbox_conversation`.
- `PATCH /api/v1/inbox/conversations/{conversationId}/status` — Open or close a conversation. CLI: `1msg inbox conversations status`. MCP: `platform_update_inbox_conversation_status`.
- `PATCH /api/v1/inbox/conversations/{conversationId}/assignee` — Assign, reassign, or clear the conversation assignee. CLI: `1msg inbox conversations assign`. MCP: `platform_update_inbox_conversation_assignee`.
- `GET /api/v1/inbox/conversations/{conversationId}/messages` — Messages in a conversation. CLI: `1msg inbox conversations messages`. MCP: `platform_list_inbox_conversation_messages`.
- `POST /api/v1/inbox/conversations/{conversationId}/block` — Block the contact. CLI: `1msg inbox conversations block`. MCP: `platform_block_inbox_contact`.
- `POST /api/v1/inbox/conversations/{conversationId}/unblock` — Unblock the contact. CLI: `1msg inbox conversations unblock`. MCP: `platform_unblock_inbox_contact`.
- `PATCH /api/v1/inbox/conversations/{conversationId}/title` — Rename a conversation. CLI: `1msg inbox conversations title`. MCP: `platform_rename_inbox_conversation`.
- `GET /api/v1/inbox/contacts` — List inbox contacts. CLI: `1msg inbox contacts`. MCP: `platform_list_inbox_contacts`.
- `GET /api/v1/inbox/webhook` — Read the account inbox webhook. CLI: `1msg inbox webhook get`. MCP: `platform_get_inbox_webhook`.
- `PUT /api/v1/inbox/webhook` — Set the account inbox webhook URL. CLI: `1msg inbox webhook set`. MCP: `platform_set_inbox_webhook`.
- `DELETE /api/v1/inbox/webhook` — Remove the account inbox webhook. CLI: `1msg inbox webhook delete`. MCP: `platform_delete_inbox_webhook`.
- `POST /api/v1/inbox/webhook/secret` — Rotate the inbox webhook signing secret. CLI: `1msg inbox webhook secret`. MCP: `platform_rotate_inbox_webhook_secret`.

## campaigns

- `GET /api/v1/campaigns/segments` — List segments. CLI: `1msg campaigns segments list`. MCP: `platform_list_campaign_segments`.
- `POST /api/v1/campaigns/segments` — Create a segment. CLI: `1msg campaigns segments create`. MCP: `platform_create_campaign_segment`.
- `GET /api/v1/campaigns/segments/{segmentId}` — Get a segment. CLI: `1msg campaigns segments get`. MCP: `platform_get_campaign_segment`.
- `PATCH /api/v1/campaigns/segments/{segmentId}` — Update a segment. CLI: `1msg campaigns segments update`. MCP: `platform_update_campaign_segment`.
- `DELETE /api/v1/campaigns/segments/{segmentId}` — Delete a segment. CLI: `1msg campaigns segments delete`. MCP: `platform_delete_campaign_segment`.
- `GET /api/v1/campaigns/segments/{segmentId}/members` — List segment members. CLI: `1msg campaigns segments members list`. MCP: `platform_list_campaign_segment_members`.
- `POST /api/v1/campaigns/segments/{segmentId}/members` — Add segment members. CLI: `1msg campaigns segments members add`. MCP: `platform_add_campaign_segment_members`.
- `PUT /api/v1/campaigns/segments/{segmentId}/members` — Replace segment members. CLI: `1msg campaigns segments members replace`. MCP: `platform_replace_campaign_segment_members`.
- `DELETE /api/v1/campaigns/segments/{segmentId}/members` — Remove segment members. CLI: `1msg campaigns segments members remove`. MCP: `platform_remove_campaign_segment_members`.
- `PATCH /api/v1/campaigns/segments/{segmentId}/members/{memberId}` — Update one segment member. CLI: `1msg campaigns segments members update`. MCP: `platform_update_campaign_segment_member`.
- `GET /api/v1/campaigns` — List campaigns. CLI: `1msg campaigns list`. MCP: `platform_list_campaigns`.
- `POST /api/v1/campaigns` — Create a campaign draft. CLI: `1msg campaigns create`. MCP: `platform_create_campaign`.
- `GET /api/v1/campaigns/{campaignId}` — Get a campaign. CLI: `1msg campaigns get`. MCP: `platform_get_campaign`.
- `PATCH /api/v1/campaigns/{campaignId}` — Update a draft campaign. CLI: `1msg campaigns update`. MCP: `platform_update_campaign`.
- `GET /api/v1/campaigns/{campaignId}/preview` — Preview a campaign. CLI: `1msg campaigns preview`. MCP: `platform_preview_campaign`.
- `POST /api/v1/campaigns/{campaignId}/send` — Send or schedule a campaign. CLI: `1msg campaigns send`. MCP: `platform_send_campaign`.
- `PATCH /api/v1/campaigns/{campaignId}/schedule` — Change the scheduled time. CLI: `1msg campaigns schedule`. MCP: `platform_schedule_campaign`.
- `POST /api/v1/campaigns/{campaignId}/unschedule` — Return a scheduled campaign to draft. CLI: `1msg campaigns unschedule`. MCP: `platform_unschedule_campaign`.
- `POST /api/v1/campaigns/{campaignId}/pause` — Pause a sending campaign. CLI: `1msg campaigns pause`. MCP: `platform_pause_campaign`.
- `POST /api/v1/campaigns/{campaignId}/resume` — Resume a paused campaign. CLI: `1msg campaigns resume`. MCP: `platform_resume_campaign`.
- `POST /api/v1/campaigns/{campaignId}/complete` — Complete a campaign. CLI: `1msg campaigns complete`. MCP: `platform_complete_campaign`.
- `POST /api/v1/campaigns/{campaignId}/test` — Send one test. CLI: `1msg campaigns test`. MCP: `platform_test_campaign`.
- `GET /api/v1/campaigns/{campaignId}/analytics` — Analytics summary. CLI: `1msg campaigns analytics`. MCP: `platform_get_campaign_analytics`.
- `GET /api/v1/campaigns/{campaignId}/analytics/recipients` — Recipient analytics. CLI: `1msg campaigns analytics recipients`. MCP: `platform_list_campaign_analytics_recipients`.
- `GET /api/v1/campaigns/{campaignId}/analytics/replies` — Reply feed. CLI: `1msg campaigns analytics replies`. MCP: `platform_list_campaign_analytics_replies`.
- `GET /api/v1/campaigns/{campaignId}/analytics/errors` — Errors by reason. CLI: `1msg campaigns analytics errors`. MCP: `platform_list_campaign_analytics_errors`.
