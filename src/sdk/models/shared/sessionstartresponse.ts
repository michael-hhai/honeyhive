/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The response object for starting a session
 */
export class SessionStartResponse extends SpeakeasyBase {
    /**
     * The ID of the project for the session
     */
    @SpeakeasyMetadata()
    @Expose({ name: "project_id" })
    projectId?: string;

    /**
     * The ID of the started session
     */
    @SpeakeasyMetadata()
    @Expose({ name: "session_id" })
    sessionId?: string;
}