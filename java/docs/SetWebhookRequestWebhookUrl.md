

# SetWebhookRequestWebhookUrl

HTTP or HTTPS URL, or array of URLs (max 5). Replaces the stored list. Empty values are rejected — clear webhooks with `POST /settings`. 

## oneOf schemas
* [List<URI>](List<URI>.md)
* [URI](URI.md)

## Example
```java
// Import classes:
import io.onemsg.sdk.model.SetWebhookRequestWebhookUrl;
import io.onemsg.sdk.model.List<URI>;
import io.onemsg.sdk.model.URI;

public class Example {
    public static void main(String[] args) {
        SetWebhookRequestWebhookUrl exampleSetWebhookRequestWebhookUrl = new SetWebhookRequestWebhookUrl();

        // create a new List<URI>
        List<URI> exampleList<URI> = new List<URI>();
        // set SetWebhookRequestWebhookUrl to List<URI>
        exampleSetWebhookRequestWebhookUrl.setActualInstance(exampleList<URI>);
        // to get back the List<URI> set earlier
        List<URI> testList<URI> = (List<URI>) exampleSetWebhookRequestWebhookUrl.getActualInstance();

        // create a new URI
        URI exampleURI = new URI();
        // set SetWebhookRequestWebhookUrl to URI
        exampleSetWebhookRequestWebhookUrl.setActualInstance(exampleURI);
        // to get back the URI set earlier
        URI testURI = (URI) exampleSetWebhookRequestWebhookUrl.getActualInstance();
    }
}
```


