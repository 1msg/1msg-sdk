

# SetWebhook200ResponseWebhookUrl

Currently stored webhook URL or list

## oneOf schemas
* [List<String>](List<String>.md)
* [String](String.md)

## Example
```java
// Import classes:
import io.onemsg.sdk.model.SetWebhook200ResponseWebhookUrl;
import io.onemsg.sdk.model.List<String>;
import io.onemsg.sdk.model.String;

public class Example {
    public static void main(String[] args) {
        SetWebhook200ResponseWebhookUrl exampleSetWebhook200ResponseWebhookUrl = new SetWebhook200ResponseWebhookUrl();

        // create a new List<String>
        List<String> exampleList<String> = new List<String>();
        // set SetWebhook200ResponseWebhookUrl to List<String>
        exampleSetWebhook200ResponseWebhookUrl.setActualInstance(exampleList<String>);
        // to get back the List<String> set earlier
        List<String> testList<String> = (List<String>) exampleSetWebhook200ResponseWebhookUrl.getActualInstance();

        // create a new String
        String exampleString = new String();
        // set SetWebhook200ResponseWebhookUrl to String
        exampleSetWebhook200ResponseWebhookUrl.setActualInstance(exampleString);
        // to get back the String set earlier
        String testString = (String) exampleSetWebhook200ResponseWebhookUrl.getActualInstance();
    }
}
```


