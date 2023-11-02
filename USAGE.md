<!-- Start SDK Example Usage -->


```typescript
import { HoneyHive } from "honeyhive";

(async () => {
    const sdk = new HoneyHive({
        bearerAuth: "",
    });

    const res = await sdk.deleteDatasetsName({
        name: "string",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->
