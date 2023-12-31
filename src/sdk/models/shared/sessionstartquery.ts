/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

/**
 * The user properties for the session
 */
export class SessionStartQueryUserProperties extends SpeakeasyBase {}

/**
 * The request object for starting a session
 */
export class SessionStartQuery extends SpeakeasyBase {
    /**
     * The project name for the session
     */
    @SpeakeasyMetadata()
    @Expose({ name: "project" })
    project?: string;

    /**
     * The ID of the session
     */
    @SpeakeasyMetadata()
    @Expose({ name: "session_id" })
    sessionId?: string;

    /**
     * The name for the session
     */
    @SpeakeasyMetadata()
    @Expose({ name: "session_name" })
    sessionName?: string;

    /**
     * The source of the session
     */
    @SpeakeasyMetadata()
    @Expose({ name: "source" })
    source?: string;

    /**
     * The user properties for the session
     */
    @SpeakeasyMetadata()
    @Expose({ name: "user_properties" })
    @Type(() => SessionStartQueryUserProperties)
    userProperties?: SessionStartQueryUserProperties;
}
