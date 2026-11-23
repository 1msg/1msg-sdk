# OneMsgSdk::CreateUploadMediaRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **body** | **String** | File HTTP(S) URL or base64 data URI (&#x60;data:&lt;mime&gt;;base64,...&#x60;) | [optional] |
| **url** | **String** | Alias for &#x60;body&#x60; — public HTTP(S) URL of the file to upload | [optional] |

## Example

```ruby
require 'one_msg_sdk'

instance = OneMsgSdk::CreateUploadMediaRequest.new(
  body: null,
  url: null
)
```

