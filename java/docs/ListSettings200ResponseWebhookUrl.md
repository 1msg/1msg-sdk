

# ListSettings200ResponseWebhookUrl

One URL, or several if multiple webhooks are configured

## oneOf schemas
* [List<String>](List<String>.md)
* [String](String.md)

## Example
```java
// Import classes:
import io.onemsg.sdk.model.ListSettings200ResponseWebhookUrl;
import io.onemsg.sdk.model.List<String>;
import io.onemsg.sdk.model.String;

public class Example {
    public static void main(String[] args) {
        ListSettings200ResponseWebhookUrl exampleListSettings200ResponseWebhookUrl = new ListSettings200ResponseWebhookUrl();

        // create a new List<String>
        List<String> exampleList<String> = new List<String>();
        // set ListSettings200ResponseWebhookUrl to List<String>
        exampleListSettings200ResponseWebhookUrl.setActualInstance(exampleList<String>);
        // to get back the List<String> set earlier
        List<String> testList<String> = (List<String>) exampleListSettings200ResponseWebhookUrl.getActualInstance();

        // create a new String
        String exampleString = new String();
        // set ListSettings200ResponseWebhookUrl to String
        exampleListSettings200ResponseWebhookUrl.setActualInstance(exampleString);
        // to get back the String set earlier
        String testString = (String) exampleListSettings200ResponseWebhookUrl.getActualInstance();
    }
}
```


