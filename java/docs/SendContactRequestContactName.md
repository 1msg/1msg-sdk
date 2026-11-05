

# SendContactRequestContactName

Display name (string) or Cloud API name object

## oneOf schemas
* [Map<String, Object>](Map<String, Object>.md)
* [String](String.md)

## Example
```java
// Import classes:
import io.onemsg.sdk.model.SendContactRequestContactName;
import io.onemsg.sdk.model.Map<String, Object>;
import io.onemsg.sdk.model.String;

public class Example {
    public static void main(String[] args) {
        SendContactRequestContactName exampleSendContactRequestContactName = new SendContactRequestContactName();

        // create a new Map<String, Object>
        Map<String, Object> exampleMap<String, Object> = new Map<String, Object>();
        // set SendContactRequestContactName to Map<String, Object>
        exampleSendContactRequestContactName.setActualInstance(exampleMap<String, Object>);
        // to get back the Map<String, Object> set earlier
        Map<String, Object> testMap<String, Object> = (Map<String, Object>) exampleSendContactRequestContactName.getActualInstance();

        // create a new String
        String exampleString = new String();
        // set SendContactRequestContactName to String
        exampleSendContactRequestContactName.setActualInstance(exampleString);
        // to get back the String set earlier
        String testString = (String) exampleSendContactRequestContactName.getActualInstance();
    }
}
```


