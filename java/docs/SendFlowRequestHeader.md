

# SendFlowRequestHeader

Flow header (string or text header object)

## oneOf schemas
* [Object](Object.md)
* [String](String.md)

## Example
```java
// Import classes:
import io.onemsg.sdk.model.SendFlowRequestHeader;
import io.onemsg.sdk.model.Object;
import io.onemsg.sdk.model.String;

public class Example {
    public static void main(String[] args) {
        SendFlowRequestHeader exampleSendFlowRequestHeader = new SendFlowRequestHeader();

        // create a new Object
        Object exampleObject = new Object();
        // set SendFlowRequestHeader to Object
        exampleSendFlowRequestHeader.setActualInstance(exampleObject);
        // to get back the Object set earlier
        Object testObject = (Object) exampleSendFlowRequestHeader.getActualInstance();

        // create a new String
        String exampleString = new String();
        // set SendFlowRequestHeader to String
        exampleSendFlowRequestHeader.setActualInstance(exampleString);
        // to get back the String set earlier
        String testString = (String) exampleSendFlowRequestHeader.getActualInstance();
    }
}
```


