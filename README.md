# HoneyHive

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/speakeasy-sdks/honeyhive.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/honeyhive/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add HoneyHive
```

### Yarn

```bash
yarn add HoneyHive
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [HoneyHive SDK](docs/sdks/honeyhive/README.md)

* [deleteDatasetsName](docs/sdks/honeyhive/README.md#deletedatasetsname) - Delete a dataset
* [deleteMetrics](docs/sdks/honeyhive/README.md#deletemetrics) - Delete a metric
* [deletePromptsId](docs/sdks/honeyhive/README.md#deletepromptsid) - Delete a prompt
* [deleteTasks](docs/sdks/honeyhive/README.md#deletetasks) - Delete a task
* [getDatasets](docs/sdks/honeyhive/README.md#getdatasets) - Get datasets
* [getFineTunedModels](docs/sdks/honeyhive/README.md#getfinetunedmodels) - Get all fine-tuned models
* [getFineTunedModelsId](docs/sdks/honeyhive/README.md#getfinetunedmodelsid) - Get a fine-tuned model
* [getGenerations](docs/sdks/honeyhive/README.md#getgenerations) - Get all generations
* [getMetrics](docs/sdks/honeyhive/README.md#getmetrics) - Get all metrics
* [getPrompts](docs/sdks/honeyhive/README.md#getprompts) - Get all prompts
* [getSession](docs/sdks/honeyhive/README.md#getsession) - Get all sessions
* [getSessionSessionId](docs/sdks/honeyhive/README.md#getsessionsessionid) - Get a session
* [getSessionSessionIdExport](docs/sdks/honeyhive/README.md#getsessionsessionidexport) - Get a session in Trace Event format
* [getTasks](docs/sdks/honeyhive/README.md#gettasks) - Get all tasks
* [postDatasets](docs/sdks/honeyhive/README.md#postdatasets) - Create a dataset
* [postEvaluations](docs/sdks/honeyhive/README.md#postevaluations) - Log an evaluation
* [postFeedback](docs/sdks/honeyhive/README.md#postfeedback) - Send feedback
* [postGenerations](docs/sdks/honeyhive/README.md#postgenerations) - Generate a text
* [postGenerationsLog](docs/sdks/honeyhive/README.md#postgenerationslog) - Log a generation
* [postMetrics](docs/sdks/honeyhive/README.md#postmetrics) - Create a metric
* [postPrompts](docs/sdks/honeyhive/README.md#postprompts) - Create a prompt
* [postSessionStart](docs/sdks/honeyhive/README.md#postsessionstart) - Start a session
* [postSessionSessionIdEnd](docs/sdks/honeyhive/README.md#postsessionsessionidend) - End a session
* [postSessionSessionIdEvent](docs/sdks/honeyhive/README.md#postsessionsessionidevent) - Log an event
* [postSessionSessionIdFeedback](docs/sdks/honeyhive/README.md#postsessionsessionidfeedback) - Log session feedback
* [postSessionsSessionIdTraces](docs/sdks/honeyhive/README.md#postsessionssessionidtraces) - Log a trace
* [postTasks](docs/sdks/honeyhive/README.md#posttasks) - Create a task
* [putPromptsId](docs/sdks/honeyhive/README.md#putpromptsid) - Update a prompt
* [putTasks](docs/sdks/honeyhive/README.md#puttasks) - Update a task
<!-- End SDK Available Operations -->

<!-- Start Dev Containers -->

<!-- End Dev Containers -->

<!-- Start Error Handling -->
# Error Handling

Handling errors in your SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.
<!-- End Error Handling -->

<!-- Start Server Selection -->
# Server Selection

## Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.honeyhive.ai` | None |

For example:


```typescript
import { HoneyHive } from "HoneyHive";

(async () => {
    const sdk = new HoneyHive({
        bearerAuth: "",
        serverIdx: 0,
    });

    const res = await sdk.honeyHive.deleteDatasetsName({
        name: "string",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```


## Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:


```typescript
import { HoneyHive } from "HoneyHive";

(async () => {
    const sdk = new HoneyHive({
        bearerAuth: "",
        serverURL: "https://api.honeyhive.ai",
    });

    const res = await sdk.honeyHive.deleteDatasetsName({
        name: "string",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Server Selection -->

<!-- Start Custom HTTP Client -->
# Custom HTTP Client

The Typescript SDK makes API calls using the (axios)[https://axios-http.com/docs/intro] HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.


For example, you could specify a header for every request that your sdk makes as follows:

```typescript
from HoneyHive import HoneyHive;
import axios;

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})


const sdk = new HoneyHive({defaultClient: httpClient});
```
<!-- End Custom HTTP Client -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
