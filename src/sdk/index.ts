// GENERATED CODE - DO NOT MODIFY
import { ApiClient, BaseResource } from '@nexical/sdk-core';
import { TeamEmailSDK as BaseTeamEmailSDK } from './team-email-sdk.js';
export * from './team-email-sdk.js';
export * from './types.js';

/** Main SDK for the team-email module. */
export class TeamEmailModule extends BaseResource {
  public teamEmail: BaseTeamEmailSDK;
  public static readonly roles: Record<string, string> = {};

  constructor(client: ApiClient) {
    super(client);
    this.teamEmail = new BaseTeamEmailSDK(client);
  }
}
