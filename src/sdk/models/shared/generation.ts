/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The response object for a generation
 */
export class Generation extends SpeakeasyBase {
    /**
     * The number of tokens generated for the completion
     */
    @SpeakeasyMetadata()
    @Expose({ name: "completion_tokens" })
    completionTokens?: number;

    /**
     * The cost of the generation
     */
    @SpeakeasyMetadata()
    @Expose({ name: "cost" })
    cost?: number;

    /**
     * The feedback associated with this generation
     */
    @SpeakeasyMetadata()
    @Expose({ name: "feedback" })
    feedback?: Record<string, any>;

    /**
     * The generated completion
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generation" })
    generation?: string;

    /**
     * The unique ID of the generation
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generation_id" })
    generationId?: string;

    /**
     * The hyperparameters that were used to generate the text
     */
    @SpeakeasyMetadata()
    @Expose({ name: "hyperparameters" })
    hyperparameters?: Record<string, any>;

    /**
     * The latency of the generation in milliseconds
     */
    @SpeakeasyMetadata()
    @Expose({ name: "latency" })
    latency?: number;

    /**
     * The model that was used to generate the text
     */
    @SpeakeasyMetadata()
    @Expose({ name: "model" })
    model?: string;

    /**
     * The source of the generation
     */
    @SpeakeasyMetadata()
    @Expose({ name: "source" })
    source?: string;

    /**
     * The task for which the generation is being requested
     */
    @SpeakeasyMetadata()
    @Expose({ name: "task" })
    task?: string;

    /**
     * The total number of tokens generated
     */
    @SpeakeasyMetadata()
    @Expose({ name: "total_tokens" })
    totalTokens?: number;

    /**
     * The unique ID of the prompt
     */
    @SpeakeasyMetadata()
    @Expose({ name: "version" })
    version?: string;
}
