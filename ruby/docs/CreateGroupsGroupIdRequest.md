# OneMsgSdk::CreateGroupsGroupIdRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **subject** | **String** | New group subject / name | [optional] |
| **description** | **String** | New group description | [optional] |
| **profile_picture_file** | **String** | Image URL or base64 data URI for the group profile picture | [optional] |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::CreateGroupsGroupIdRequest.new(
  subject: null,
  description: null,
  profile_picture_file: null
)
```

