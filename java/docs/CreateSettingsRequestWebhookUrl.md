

# CreateSettingsRequestWebhookUrl

Replacement webhook URL, or array of URLs (max 5)

## oneOf schemas
* [List<String>](List<String>.md)
* [String](String.md)

## Example
```java
// Import classes:
import io.onemsg.sdk.model.CreateSettingsRequestWebhookUrl;
import io.onemsg.sdk.model.List<String>;
import io.onemsg.sdk.model.String;

public class Example {
    public static void main(String[] args) {
        CreateSettingsRequestWebhookUrl exampleCreateSettingsRequestWebhookUrl = new CreateSettingsRequestWebhookUrl();

        // create a new List<String>
        List<String> exampleList<String> = new List<String>();
        // set CreateSettingsRequestWebhookUrl to List<String>
        exampleCreateSettingsRequestWebhookUrl.setActualInstance(exampleList<String>);
        // to get back the List<String> set earlier
        List<String> testList<String> = (List<String>) exampleCreateSettingsRequestWebhookUrl.getActualInstance();

        // create a new String
        String exampleString = new String();
        // set CreateSettingsRequestWebhookUrl to String
        exampleCreateSettingsRequestWebhookUrl.setActualInstance(exampleString);
        // to get back the String set earlier
        String testString = (String) exampleCreateSettingsRequestWebhookUrl.getActualInstance();
    }
}
```


