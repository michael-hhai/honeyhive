# TaskUpdateQuery

The request object for updating a task


## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `datasets`                                                                | [DatasetResponse](../../models/shared/datasetresponse.md)[]               | :heavy_minus_sign:                                                        | The new datasets for the task                                             |
| `fineTunedModels`                                                         | [FineTunedModelResponse](../../models/shared/finetunedmodelresponse.md)[] | :heavy_minus_sign:                                                        | The new fine-tuned models for the task                                    |
| `metrics`                                                                 | [MetricResponse](../../models/shared/metricresponse.md)[]                 | :heavy_minus_sign:                                                        | The new metrics for the task                                              |
| `name`                                                                    | *string*                                                                  | :heavy_minus_sign:                                                        | The new name of the task                                                  |
| `prompts`                                                                 | [PromptResponse](../../models/shared/promptresponse.md)[]                 | :heavy_minus_sign:                                                        | The new prompts for the task                                              |
| `taskId`                                                                  | *string*                                                                  | :heavy_minus_sign:                                                        | The id of the task being updated                                          |
| `type`                                                                    | *string*                                                                  | :heavy_minus_sign:                                                        | The new type of the task                                                  |