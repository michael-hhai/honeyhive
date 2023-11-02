<!-- Start SDK Example Usage -->


```typescript
import { HoneyHive } from "HoneyHive";

(async () => {
    const sdk = new HoneyHive({
        bearerAuth: "",
    });

    const res = await sdk.honeyHive.deleteDatasetsName({
        name: "string",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->