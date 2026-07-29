# ConversationalAutomationCommandsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command_name** | **str** |  | 
**command_description** | **str** |  | 

## Example

```python
from one_msg_sdk.models.conversational_automation_commands_inner import ConversationalAutomationCommandsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationalAutomationCommandsInner from a JSON string
conversational_automation_commands_inner_instance = ConversationalAutomationCommandsInner.from_json(json)
# print the JSON string representation of the object
print(ConversationalAutomationCommandsInner.to_json())

# convert the object into a dict
conversational_automation_commands_inner_dict = conversational_automation_commands_inner_instance.to_dict()
# create an instance of ConversationalAutomationCommandsInner from a dict
conversational_automation_commands_inner_from_dict = ConversationalAutomationCommandsInner.from_dict(conversational_automation_commands_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


