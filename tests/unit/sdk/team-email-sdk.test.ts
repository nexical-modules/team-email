// GENERATED CODE - DO NOT MODIFY
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { TeamEmailSDK } from '../../../src/sdk/team-email-sdk';

describe('TeamEmailSDK', () => {
  let sdk: TeamEmailSDK;
  let mockClient: { request: vi.Mock };

  beforeEach(() => {
    vi.clearAllMocks();
    mockClient = {
      request: vi.fn().mockResolvedValue({ success: true, data: { id: 'test-id' } }),
    };
    sdk = new TeamEmailSDK(mockClient as unknown as Record<string, unknown>);
  });

  it('should initialize', () => {
    expect(sdk).toBeDefined();
  });

  it('should call GET /team-email on list()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team-email'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).list(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team-email';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on list()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team-email'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).list(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team-email/[id] on get()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team-email/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).get(...args);

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team-email/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on get()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team-email/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).get(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call POST /team-email on create()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team-email'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).create(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('POST');

    let expectedPath = 'team-email';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on create()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team-email'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).create(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call PUT /team-email/[id] on update()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team-email/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).update(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('PUT');

    let expectedPath = 'team-email/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on update()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team-email/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).update(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call DELETE /team-email/[id] on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team-email/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).delete(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('DELETE');

    let expectedPath = 'team-email/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team-email/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).delete(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });
});
