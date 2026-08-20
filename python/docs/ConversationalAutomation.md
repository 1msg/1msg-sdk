# ConversationalAutomation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_welcome_message** | **bool** | Enable the automatic welcome message for new conversations | [optional] 
**prompts** | **List[str]** | Ice-breaker prompt strings (max 4, each ≤ 80 characters) | [optional] 
**commands** | [**List[ConversationalAutomationCommandsInner]**](ConversationalAutomationCommandsInner.md) | Slash commands shown in WhatsApp | [optional] 

## Example

```python
from one_msg_sdk.models.conversational_automation import ConversationalAutomation

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationalAutomation from a JSON string
conversational_automation_instance = ConversationalAutomation.from_json(json)
# print the JSON string representation of the object
print(ConversationalAutomation.to_json())

# convert the object into a dict
conversational_automation_dict = conversational_automation_instance.to_dict()
# create an instance of ConversationalAutomation from a dict
conversational_automation_from_dict = ConversationalAutomation.from_dict(conversational_automation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


