// GENERATED CODE - DO NOT MODIFY
import { BaseResource } from '@nexical/sdk-core';
import type { TeamEmail } from './types.js';

/** SDK client for TeamEmail. */
export class TeamEmailSDK extends BaseResource {
  public async list(params?: {
    search?: string;
    take?: number;
    skip?: number;
    orderBy?: string | Record<string, 'asc' | 'desc'>;
    filters?: Record<string, unknown>;
  }): Promise<{ success: boolean; data: TeamEmail[]; error?: string; meta: { total: number } }> {
    let orderBy = params?.orderBy;
    if (orderBy && typeof orderBy === 'object') {
      const keys = Object.keys(orderBy);
      if (keys.length > 0) {
        orderBy = `${keys[0]}:${orderBy[keys[0]]}`;
      }
    }
    const query = this.buildQuery({
      ...params?.filters,
      search: params?.search,
      take: params?.take,
      skip: params?.skip,
      orderBy,
    });
    return this._request('GET', `/team-email${query}`);
  }

  public async get(id: string): Promise<{ success: boolean; data: TeamEmail; error?: string }> {
    return this._request('GET', `/team-email/${id}`);
  }

  public async create(
    data: Partial<TeamEmail>,
  ): Promise<{ success: boolean; data: TeamEmail; error?: string }> {
    return this._request('POST', `/team-email`, data);
  }

  public async update(
    id: string,
    data: Partial<TeamEmail>,
  ): Promise<{ success: boolean; data: TeamEmail; error?: string }> {
    return this._request('PUT', `/team-email/${id}`, data);
  }

  public async delete(id: string): Promise<{ success: boolean; error?: string }> {
    return this._request('DELETE', `/team-email/${id}`);
  }
}
