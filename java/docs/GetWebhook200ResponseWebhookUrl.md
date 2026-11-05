

# GetWebhook200ResponseWebhookUrl

Configured webhook URL, array of URLs, or null when none is set

## oneOf schemas
* [List<URI>](List<URI>.md)
* [URI](URI.md)

NOTE: this class is nullable.

## Example
```java
// Import classes:
import io.onemsg.sdk.model.GetWebhook200ResponseWebhookUrl;
import io.onemsg.sdk.model.List<URI>;
import io.onemsg.sdk.model.URI;

public class Example {
    public static void main(String[] args) {
        GetWebhook200ResponseWebhookUrl exampleGetWebhook200ResponseWebhookUrl = new GetWebhook200ResponseWebhookUrl();

        // create a new List<URI>
        List<URI> exampleList<URI> = new List<URI>();
        // set GetWebhook200ResponseWebhookUrl to List<URI>
        exampleGetWebhook200ResponseWebhookUrl.setActualInstance(exampleList<URI>);
        // to get back the List<URI> set earlier
        List<URI> testList<URI> = (List<URI>) exampleGetWebhook200ResponseWebhookUrl.getActualInstance();

        // create a new URI
        URI exampleURI = new URI();
        // set GetWebhook200ResponseWebhookUrl to URI
        exampleGetWebhook200ResponseWebhookUrl.setActualInstance(exampleURI);
        // to get back the URI set earlier
        URI testURI = (URI) exampleGetWebhook200ResponseWebhookUrl.getActualInstance();
    }
}
```


