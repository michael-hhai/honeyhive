/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DatasetResponse } from "./datasetresponse";
import { FineTunedModelResponse } from "./finetunedmodelresponse";
import { MetricResponse } from "./metricresponse";
import { PromptResponse } from "./promptresponse";
import { Expose, Transform, Type } from "class-transformer";

/**
 * The request object for creating a task
 */
export class TaskCreationQuery extends SpeakeasyBase {
    /**
     * The timestamp of when the task was created
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    /**
     * The datasets for the task
     */
    @SpeakeasyMetadata({ elemType: DatasetResponse })
    @Expose({ name: "datasets" })
    @Type(() => DatasetResponse)
    datasets?: DatasetResponse[];

    /**
     * The description of the task
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * The fine-tuned models for the task
     */
    @SpeakeasyMetadata({ elemType: FineTunedModelResponse })
    @Expose({ name: "fine_tuned_models" })
    @Type(() => FineTunedModelResponse)
    fineTunedModels?: FineTunedModelResponse[];

    /**
     * The metrics for the task
     */
    @SpeakeasyMetadata({ elemType: MetricResponse })
    @Expose({ name: "metrics" })
    @Type(() => MetricResponse)
    metrics?: MetricResponse[];

    /**
     * The name of the task
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * The prompts for the task
     */
    @SpeakeasyMetadata({ elemType: PromptResponse })
    @Expose({ name: "prompts" })
    @Type(() => PromptResponse)
    prompts?: PromptResponse[];

    /**
     * The type of the task
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: string;

    /**
     * The timestamp of when the task was last updated
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;
}
