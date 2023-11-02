/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetDatasetsRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dataset_id" })
    datasetId?: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prompt" })
    prompt?: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=purpose" })
    purpose?: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=task" })
    task?: string;
}

export class GetDatasetsResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * OK
     */
    @SpeakeasyMetadata({ elemType: shared.DatasetResponse })
    datasetResponses?: shared.DatasetResponse[];

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
