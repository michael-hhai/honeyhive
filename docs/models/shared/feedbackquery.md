# FeedbackQuery

The request object for providing feedback


## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `feedbackJson`                                                                | [FeedbackQueryFeedbackJson](../../models/shared/feedbackqueryfeedbackjson.md) | :heavy_minus_sign:                                                            | The feedback JSON with one or many feedback items                             |
| `generationId`                                                                | *string*                                                                      | :heavy_minus_sign:                                                            | The ID of the generation for which feedback is being submitted                |
| `groundTruth`                                                                 | *string*                                                                      | :heavy_minus_sign:                                                            | The ground truth for the generation                                           |
| `task`                                                                        | *string*                                                                      | :heavy_minus_sign:                                                            | The task for which the feedback is being submitted                            |