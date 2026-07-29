# 1msg Python SDK

Official Python SDK for the **1msg WhatsApp Business API**.

## Install

```bash
pip install one-msg-sdk==1.0.0
```

## Quick start

```python
import os

from one_msg_sdk import ApiClient, Configuration
from one_msg_sdk.api.messaging_api import MessagingApi

configuration = Configuration(
    host=f"{os.environ['MSG_BASE_URL'].rstrip('/')}/{os.environ['MSG_INSTANCE_ID']}"
)

with ApiClient(configuration) as api_client:
    messaging = MessagingApi(api_client)
    response = messaging.send_message(
        token=os.environ["MSG_API_TOKEN"],
        body="Hello from 1MSG SDK",
        chat_id="12020721369@c.us",
    )
    print(response)
```

## Generate

```bash
npm run bundle:public
npm run generate:sdk -- python
```

Generated package output is written to `packages/sdk-python/generated/`.

## Publish

See [docs/SDK-PUBLISHING.md](../../docs/SDK-PUBLISHING.md).
