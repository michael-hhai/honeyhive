# Generation

The response object for a generation


## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `completionTokens`                                      | *number*                                                | :heavy_minus_sign:                                      | The number of tokens generated for the completion       |
| `cost`                                                  | *number*                                                | :heavy_minus_sign:                                      | The cost of the generation                              |
| `feedback`                                              | Record<string, *any*>                                   | :heavy_minus_sign:                                      | The feedback associated with this generation            |
| `generation`                                            | *string*                                                | :heavy_minus_sign:                                      | The generated completion                                |
| `generationId`                                          | *string*                                                | :heavy_minus_sign:                                      | The unique ID of the generation                         |
| `hyperparameters`                                       | Record<string, *any*>                                   | :heavy_minus_sign:                                      | The hyperparameters that were used to generate the text |
| `latency`                                               | *number*                                                | :heavy_minus_sign:                                      | The latency of the generation in milliseconds           |
| `model`                                                 | *string*                                                | :heavy_minus_sign:                                      | The model that was used to generate the text            |
| `source`                                                | *string*                                                | :heavy_minus_sign:                                      | The source of the generation                            |
| `task`                                                  | *string*                                                | :heavy_minus_sign:                                      | The task for which the generation is being requested    |
| `totalTokens`                                           | *number*                                                | :heavy_minus_sign:                                      | The total number of tokens generated                    |
| `version`                                               | *string*                                                | :heavy_minus_sign:                                      | The unique ID of the prompt                             |