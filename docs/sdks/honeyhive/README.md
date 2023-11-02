# HoneyHive SDK


## Overview

### Available Operations

* [deleteDatasetsName](#deletedatasetsname) - Delete a dataset
* [deleteMetrics](#deletemetrics) - Delete a metric
* [deletePromptsId](#deletepromptsid) - Delete a prompt
* [deleteTasks](#deletetasks) - Delete a task
* [getDatasets](#getdatasets) - Get datasets
* [getFineTunedModels](#getfinetunedmodels) - Get all fine-tuned models
* [getFineTunedModelsId](#getfinetunedmodelsid) - Get a fine-tuned model
* [getGenerations](#getgenerations) - Get all generations
* [getMetrics](#getmetrics) - Get all metrics
* [getPrompts](#getprompts) - Get all prompts
* [getSession](#getsession) - Get all sessions
* [getSessionSessionId](#getsessionsessionid) - Get a session
* [getSessionSessionIdExport](#getsessionsessionidexport) - Get a session in Trace Event format
* [getTasks](#gettasks) - Get all tasks
* [postDatasets](#postdatasets) - Create a dataset
* [postEvaluations](#postevaluations) - Log an evaluation
* [postFeedback](#postfeedback) - Send feedback
* [postGenerations](#postgenerations) - Generate a text
* [postGenerationsLog](#postgenerationslog) - Log a generation
* [postMetrics](#postmetrics) - Create a metric
* [postPrompts](#postprompts) - Create a prompt
* [postSessionStart](#postsessionstart) - Start a session
* [postSessionSessionIdEnd](#postsessionsessionidend) - End a session
* [postSessionSessionIdEvent](#postsessionsessionidevent) - Log an event
* [postSessionSessionIdFeedback](#postsessionsessionidfeedback) - Log session feedback
* [postSessionsSessionIdTraces](#postsessionssessionidtraces) - Log a trace
* [postTasks](#posttasks) - Create a task
* [putPromptsId](#putpromptsid) - Update a prompt
* [putTasks](#puttasks) - Update a task

## deleteDatasetsName

Delete a dataset

### Example Usage

```typescript
import { HoneyHive } from "honeyhive";

(async() => {
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

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.DeleteDatasetsNameRequest](../../models/operations/deletedatasetsnamerequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.DeleteDatasetsNameResponse](../../models/operations/deletedatasetsnameresponse.md)>**


## deleteMetrics

Delete a metric

### Example Usage

```typescript
import { HoneyHive } from "honeyhive";

(async() => {
  const sdk = new HoneyHive({
    bearerAuth: "",
  });

  const res = await sdk.deleteMetrics({
    metricId: "string",
    name: "string",
    task: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.DeleteMetricsRequest](../../models/operations/deletemetricsrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.DeleteMetricsResponse](../../models/operations/deletemetricsresponse.md)>**


## deletePromptsId

Delete a prompt

### Example Usage

```typescript
import { HoneyHive } from "honeyhive";

(async() => {
  const sdk = new HoneyHive({
    bearerAuth: "",
  });

  const res = await sdk.deletePromptsId({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.DeletePromptsIdRequest](../../models/operations/deletepromptsidrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.DeletePromptsIdResponse](../../models/operations/deletepromptsidresponse.md)>**


## deleteTasks

Delete a task

### Example Usage

```typescript
import { HoneyHive } from "honeyhive";

(async() => {
  const sdk = new HoneyHive({
    bearerAuth: "",
  });

  const res = await sdk.deleteTasks({
    name: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.DeleteTasksRequest](../../models/operations/deletetasksrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.DeleteTasksResponse](../../models/operations/deletetasksresponse.md)>**


## getDatasets

Get datasets

### Example Usage

```typescript
import { HoneyHive } from "honeyhive";

(async() => {
  const sdk = new HoneyHive({
    bearerAuth: "",
  });

  const res = await sdk.getDatasets({});


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetDatasetsRequest](../../models/operations/getdatasetsrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetDatasetsResponse](../../models/operations/getdatasetsresponse.md)>**


## getFineTunedModels

Get all fine-tuned models

### Example Usage

```typescript
import { HoneyHive } from "honeyhive";

(async() => {
  const sdk = new HoneyHive({
    bearerAuth: "",
  });

  const res = await sdk.getFineTunedModels({});


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetFineTunedModelsRequest](../../models/operations/getfinetunedmodelsrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetFineTunedModelsResponse](../../models/operations/getfinetunedmodelsresponse.md)>**


## getFineTunedModelsId

Get a fine-tuned model

### Example Usage

```typescript
import { HoneyHive } from "honeyhive";

(async() => {
  const sdk = new HoneyHive({
    bearerAuth: "",
  });

  const res = await sdk.getFineTunedModelsId({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetFineTunedModelsIdRequest](../../models/operations/getfinetunedmodelsidrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetFineTunedModelsIdResponse](../../models/operations/getfinetunedmodelsidresponse.md)>**


## getGenerations

Get all generations

### Example Usage

```typescript
import { HoneyHive } from "honeyhive";

(async() => {
  const sdk = new HoneyHive({
    bearerAuth: "",
  });

  const res = await sdk.getGenerations({});


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetGenerationsRequest](../../models/operations/getgenerationsrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetGenerationsResponse](../../models/operations/getgenerationsresponse.md)>**


## getMetrics

Get all metrics

### Example Usage

```typescript
import { HoneyHive } from "honeyhive";

(async() => {
  const sdk = new HoneyHive({
    bearerAuth: "",
  });

  const res = await sdk.getMetrics({});


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.GetMetricsRequest](../../models/operations/getmetricsrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.GetMetricsResponse](../../models/operations/getmetricsresponse.md)>**


## getPrompts

Get all prompts

### Example Usage

```typescript
import { HoneyHive } from "honeyhive";

(async() => {
  const sdk = new HoneyHive({
    bearerAuth: "",
  });

  const res = await sdk.getPrompts({});


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.GetPromptsRequest](../../models/operations/getpromptsrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.GetPromptsResponse](../../models/operations/getpromptsresponse.md)>**


## getSession

Get all sessions

### Example Usage

```typescript
import { HoneyHive } from "honeyhive";

(async() => {
  const sdk = new HoneyHive({
    bearerAuth: "",
  });

  const res = await sdk.getSession({
    query: {},
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.GetSessionRequest](../../models/operations/getsessionrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.GetSessionResponse](../../models/operations/getsessionresponse.md)>**


## getSessionSessionId

Get a session

### Example Usage

```typescript
import { HoneyHive } from "honeyhive";

(async() => {
  const sdk = new HoneyHive({
    bearerAuth: "",
  });

  const res = await sdk.getSessionSessionId({
    sessionId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetSessionSessionIdRequest](../../models/operations/getsessionsessionidrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetSessionSessionIdResponse](../../models/operations/getsessionsessionidresponse.md)>**


## getSessionSessionIdExport

Get a session in Trace Event format

### Example Usage

```typescript
import { HoneyHive } from "honeyhive";

(async() => {
  const sdk = new HoneyHive({
    bearerAuth: "",
  });

  const res = await sdk.getSessionSessionIdExport({
    sessionId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.GetSessionSessionIdExportRequest](../../models/operations/getsessionsessionidexportrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.GetSessionSessionIdExportResponse](../../models/operations/getsessionsessionidexportresponse.md)>**


## getTasks

Get all tasks

### Example Usage

```typescript
import { HoneyHive } from "honeyhive";

(async() => {
  const sdk = new HoneyHive({
    bearerAuth: "",
  });

  const res = await sdk.getTasks({});


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [operations.GetTasksRequest](../../models/operations/gettasksrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.GetTasksResponse](../../models/operations/gettasksresponse.md)>**


## postDatasets

Create a dataset

### Example Usage

```typescript
import { HoneyHive } from "honeyhive";

(async() => {
  const sdk = new HoneyHive({
    bearerAuth: "",
  });

  const res = await sdk.postDatasets({
    file: [
      {},
    ],
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.UploadDataset](../../models/shared/uploaddataset.md) | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PostDatasetsResponse](../../models/operations/postdatasetsresponse.md)>**


## postEvaluations

Log an evaluation

### Example Usage

```typescript
import { HoneyHive } from "honeyhive";

(async() => {
  const sdk = new HoneyHive({
    bearerAuth: "",
  });

  const res = await sdk.postEvaluations({
    comments: [
      {},
    ],
    dataset: [
      {},
    ],
    generations: [
      {},
    ],
    metrics: [
      [
        {},
      ],
    ],
    metricsToCompute: [
      "string",
    ],
    prompts: [
      {},
    ],
    results: [
      {},
    ],
    summary: [
      {},
    ],
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.EvaluationLoggingQuery](../../models/shared/evaluationloggingquery.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.PostEvaluationsResponse](../../models/operations/postevaluationsresponse.md)>**


## postFeedback

Send feedback

### Example Usage

```typescript
import { HoneyHive } from "honeyhive";

(async() => {
  const sdk = new HoneyHive({
    bearerAuth: "",
  });

  const res = await sdk.postFeedback({
    feedbackJson: {},
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.FeedbackQuery](../../models/shared/feedbackquery.md) | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PostFeedbackResponse](../../models/operations/postfeedbackresponse.md)>**


## postGenerations

Generate a text

### Example Usage

```typescript
import { HoneyHive } from "honeyhive";

(async() => {
  const sdk = new HoneyHive({
    bearerAuth: "",
  });

  const res = await sdk.postGenerations({
    input: {},
    metadata: {},
    prompts: [
      "string",
    ],
    userProperties: {},
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.GenerateQuery](../../models/shared/generatequery.md) | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PostGenerationsResponse](../../models/operations/postgenerationsresponse.md)>**


## postGenerationsLog

Log a generation

### Example Usage

```typescript
import { HoneyHive } from "honeyhive";

(async() => {
  const sdk = new HoneyHive({
    bearerAuth: "",
  });

  const res = await sdk.postGenerationsLog({
    feedback: {},
    hyperparameters: {},
    inputs: {},
    metadata: {},
    usage: {},
    userProperties: {},
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.GenerationLoggingQuery](../../models/shared/generationloggingquery.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.PostGenerationsLogResponse](../../models/operations/postgenerationslogresponse.md)>**


## postMetrics

Create a metric

### Example Usage

```typescript
import { HoneyHive } from "honeyhive";

(async() => {
  const sdk = new HoneyHive({
    bearerAuth: "",
  });

  const res = await sdk.postMetrics({});


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.MetricRequest](../../models/shared/metricrequest.md) | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PostMetricsResponse](../../models/operations/postmetricsresponse.md)>**


## postPrompts

Create a prompt

### Example Usage

```typescript
import { HoneyHive } from "honeyhive";

(async() => {
  const sdk = new HoneyHive({
    bearerAuth: "",
  });

  const res = await sdk.postPrompts({
    fewShotExamples: [
      {},
    ],
    hyperparameters: {
      "key": "string",
    },
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [shared.PromptCreationQuery](../../models/shared/promptcreationquery.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.PostPromptsResponse](../../models/operations/postpromptsresponse.md)>**


## postSessionStart

Start a session

### Example Usage

```typescript
import { HoneyHive } from "honeyhive";

(async() => {
  const sdk = new HoneyHive({
    bearerAuth: "",
  });

  const res = await sdk.postSessionStart({
    userProperties: {},
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `request`                                                            | [shared.SessionStartQuery](../../models/shared/sessionstartquery.md) | :heavy_check_mark:                                                   | The request object to use for the request.                           |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.PostSessionStartResponse](../../models/operations/postsessionstartresponse.md)>**


## postSessionSessionIdEnd

End a session

### Example Usage

```typescript
import { HoneyHive } from "honeyhive";

(async() => {
  const sdk = new HoneyHive({
    bearerAuth: "",
  });

  const res = await sdk.postSessionSessionIdEnd({
    sessionId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.PostSessionSessionIdEndRequest](../../models/operations/postsessionsessionidendrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.PostSessionSessionIdEndResponse](../../models/operations/postsessionsessionidendresponse.md)>**


## postSessionSessionIdEvent

Log an event

### Example Usage

```typescript
import { HoneyHive } from "honeyhive";

(async() => {
  const sdk = new HoneyHive({
    bearerAuth: "",
  });

  const res = await sdk.postSessionSessionIdEvent({
    sessionEventQuery: {
      children: [
        {},
      ],
      config: {},
      error: {},
      inputs: {},
      metadata: {},
    },
    sessionId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.PostSessionSessionIdEventRequest](../../models/operations/postsessionsessionideventrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.PostSessionSessionIdEventResponse](../../models/operations/postsessionsessionideventresponse.md)>**


## postSessionSessionIdFeedback

Log session feedback

### Example Usage

```typescript
import { HoneyHive } from "honeyhive";

(async() => {
  const sdk = new HoneyHive({
    bearerAuth: "",
  });

  const res = await sdk.postSessionSessionIdFeedback({
    sessionFeedback: {
      feedback: {},
    },
    sessionId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.PostSessionSessionIdFeedbackRequest](../../models/operations/postsessionsessionidfeedbackrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.PostSessionSessionIdFeedbackResponse](../../models/operations/postsessionsessionidfeedbackresponse.md)>**


## postSessionsSessionIdTraces

Log a trace

### Example Usage

```typescript
import { HoneyHive } from "honeyhive";

(async() => {
  const sdk = new HoneyHive({
    bearerAuth: "",
  });

  const res = await sdk.postSessionsSessionIdTraces({
    sessionTrace: {
      logs: [
        {
          children: [
            {},
          ],
          config: {},
          error: {},
          inputs: {},
          metadata: {},
        },
      ],
    },
    sessionId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.PostSessionsSessionIdTracesRequest](../../models/operations/postsessionssessionidtracesrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.PostSessionsSessionIdTracesResponse](../../models/operations/postsessionssessionidtracesresponse.md)>**


## postTasks

Create a task

### Example Usage

```typescript
import { HoneyHive } from "honeyhive";

(async() => {
  const sdk = new HoneyHive({
    bearerAuth: "",
  });

  const res = await sdk.postTasks({
    datasets: [
      {
        file: [
          {},
        ],
      },
    ],
    fineTunedModels: [
      {},
    ],
    metrics: [
      {
        threshold: {},
      },
    ],
    prompts: [
      {
        fewShotExamples: [
          {},
        ],
        hyperparameters: {
          "key": "string",
        },
        inputVariables: [
          "string",
        ],
      },
    ],
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `request`                                                            | [shared.TaskCreationQuery](../../models/shared/taskcreationquery.md) | :heavy_check_mark:                                                   | The request object to use for the request.                           |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.PostTasksResponse](../../models/operations/posttasksresponse.md)>**


## putPromptsId

Update a prompt

### Example Usage

```typescript
import { HoneyHive } from "honeyhive";

(async() => {
  const sdk = new HoneyHive({
    bearerAuth: "",
  });

  const res = await sdk.putPromptsId({
    promptUpdateQuery: {
      fewShotExamples: [
        {},
      ],
      hyperparameters: {
        "key": "string",
      },
      inputVariables: [
        "string",
      ],
    },
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.PutPromptsIdRequest](../../models/operations/putpromptsidrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.PutPromptsIdResponse](../../models/operations/putpromptsidresponse.md)>**


## putTasks

Update a task

### Example Usage

```typescript
import { HoneyHive } from "honeyhive";

(async() => {
  const sdk = new HoneyHive({
    bearerAuth: "",
  });

  const res = await sdk.putTasks({
    datasets: [
      {
        file: [
          {},
        ],
      },
    ],
    fineTunedModels: [
      {},
    ],
    metrics: [
      {
        threshold: {},
      },
    ],
    prompts: [
      {
        fewShotExamples: [
          {},
        ],
        hyperparameters: {
          "key": "string",
        },
        inputVariables: [
          "string",
        ],
      },
    ],
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `request`                                                        | [shared.TaskUpdateQuery](../../models/shared/taskupdatequery.md) | :heavy_check_mark:                                               | The request object to use for the request.                       |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |


### Response

**Promise<[operations.PutTasksResponse](../../models/operations/puttasksresponse.md)>**

