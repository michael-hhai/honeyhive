/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

/**
 * The feedback associated with this generation
 */
export class GenerationLoggingQueryFeedback extends SpeakeasyBase {}

/**
 * The hyperparameters that were used to generate the text
 */
export class GenerationLoggingQueryHyperparameters extends SpeakeasyBase {}

/**
 * The inputs filled into the prompt
 */
export class GenerationLoggingQueryInputs extends SpeakeasyBase {}

/**
 * The metadata to track for the generation
 */
export class GenerationLoggingQueryMetadata extends SpeakeasyBase {}

/**
 * The token usage for the generation
 */
export class GenerationLoggingQueryUsage extends SpeakeasyBase {}

/**
 * The user properties to track for the generation
 */
export class GenerationLoggingQueryUserProperties extends SpeakeasyBase {}

/**
 * The request object for logging a generation
 */
export class GenerationLoggingQuery extends SpeakeasyBase {
    /**
     * The feedback associated with this generation
     */
    @SpeakeasyMetadata()
    @Expose({ name: "feedback" })
    @Type(() => GenerationLoggingQueryFeedback)
    feedback?: GenerationLoggingQueryFeedback;

    /**
     * The text that was generated by the model provider
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generation" })
    generation?: string;

    /**
     * The ground truth for the generation
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ground_truth" })
    groundTruth?: string;

    /**
     * The hyperparameters that were used to generate the text
     */
    @SpeakeasyMetadata()
    @Expose({ name: "hyperparameters" })
    @Type(() => GenerationLoggingQueryHyperparameters)
    hyperparameters?: GenerationLoggingQueryHyperparameters;

    /**
     * The inputs filled into the prompt
     */
    @SpeakeasyMetadata()
    @Expose({ name: "inputs" })
    @Type(() => GenerationLoggingQueryInputs)
    inputs?: GenerationLoggingQueryInputs;

    /**
     * The latency of the generation in milliseconds
     */
    @SpeakeasyMetadata()
    @Expose({ name: "latency" })
    latency?: number;

    /**
     * The metadata to track for the generation
     */
    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    @Type(() => GenerationLoggingQueryMetadata)
    metadata?: GenerationLoggingQueryMetadata;

    /**
     * The model that was used to generate the text
     */
    @SpeakeasyMetadata()
    @Expose({ name: "model" })
    model?: string;

    /**
     * The prompt used to generate the text
     */
    @SpeakeasyMetadata()
    @Expose({ name: "prompt" })
    prompt?: string;

    /**
     * The source of the generation
     */
    @SpeakeasyMetadata()
    @Expose({ name: "source" })
    source?: string;

    /**
     * The task for which the generation is being logged
     */
    @SpeakeasyMetadata()
    @Expose({ name: "task" })
    task?: string;

    /**
     * The token usage for the generation
     */
    @SpeakeasyMetadata()
    @Expose({ name: "usage" })
    @Type(() => GenerationLoggingQueryUsage)
    usage?: GenerationLoggingQueryUsage;

    /**
     * The user properties to track for the generation
     */
    @SpeakeasyMetadata()
    @Expose({ name: "user_properties" })
    @Type(() => GenerationLoggingQueryUserProperties)
    userProperties?: GenerationLoggingQueryUserProperties;

    /**
     * The version of the prompt
     */
    @SpeakeasyMetadata()
    @Expose({ name: "version" })
    version?: string;
}
