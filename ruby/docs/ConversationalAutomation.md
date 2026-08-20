# OneMsgSdk::ConversationalAutomation

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **enable_welcome_message** | **Boolean** | Enable the automatic welcome message for new conversations | [optional] |
| **prompts** | **Array&lt;String&gt;** | Ice-breaker prompt strings (max 4, each ≤ 80 characters) | [optional] |
| **commands** | [**Array&lt;ConversationalAutomationCommandsInner&gt;**](ConversationalAutomationCommandsInner.md) | Slash commands shown in WhatsApp | [optional] |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::ConversationalAutomation.new(
  enable_welcome_message: null,
  prompts: null,
  commands: null
)
```

