/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

/**
 * The feedback for the session
 */
export class SessionFeedbackFeedback extends SpeakeasyBase {}

/**
 * The request object for providing feedback for a session
 */
export class SessionFeedback extends SpeakeasyBase {
    /**
     * The ID of the specific event to provide feedback for
     */
    @SpeakeasyMetadata()
    @Expose({ name: "event_id" })
    eventId?: string;

    /**
     * The feedback for the session
     */
    @SpeakeasyMetadata()
    @Expose({ name: "feedback" })
    @Type(() => SessionFeedbackFeedback)
    feedback?: SessionFeedbackFeedback;
}
