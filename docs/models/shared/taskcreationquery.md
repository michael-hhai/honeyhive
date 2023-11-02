# TaskCreationQuery

The request object for creating a task


## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The timestamp of when the task was created                                                    |
| `datasets`                                                                                    | [DatasetResponse](../../models/shared/datasetresponse.md)[]                                   | :heavy_minus_sign:                                                                            | The datasets for the task                                                                     |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The description of the task                                                                   |
| `fineTunedModels`                                                                             | [FineTunedModelResponse](../../models/shared/finetunedmodelresponse.md)[]                     | :heavy_minus_sign:                                                                            | The fine-tuned models for the task                                                            |
| `metrics`                                                                                     | [MetricResponse](../../models/shared/metricresponse.md)[]                                     | :heavy_minus_sign:                                                                            | The metrics for the task                                                                      |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The name of the task                                                                          |
| `prompts`                                                                                     | [PromptResponse](../../models/shared/promptresponse.md)[]                                     | :heavy_minus_sign:                                                                            | The prompts for the task                                                                      |
| `type`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The type of the task                                                                          |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The timestamp of when the task was last updated                                               |