

# SendFlowRequest1Header

## oneOf schemas
* [Object](Object.md)
* [String](String.md)

## Example
```java
// Import classes:
import io.onemsg.sdk.model.SendFlowRequest1Header;
import io.onemsg.sdk.model.Object;
import io.onemsg.sdk.model.String;

public class Example {
    public static void main(String[] args) {
        SendFlowRequest1Header exampleSendFlowRequest1Header = new SendFlowRequest1Header();

        // create a new Object
        Object exampleObject = new Object();
        // set SendFlowRequest1Header to Object
        exampleSendFlowRequest1Header.setActualInstance(exampleObject);
        // to get back the Object set earlier
        Object testObject = (Object) exampleSendFlowRequest1Header.getActualInstance();

        // create a new String
        String exampleString = new String();
        // set SendFlowRequest1Header to String
        exampleSendFlowRequest1Header.setActualInstance(exampleString);
        // to get back the String set earlier
        String testString = (String) exampleSendFlowRequest1Header.getActualInstance();
    }
}
```


