// GENERATED CODE - DO NOT MODIFY
import { ApiClient } from '@tests/integration/lib/client';
import { Factory } from '@tests/integration/lib/factory';
import { TestServer } from '@tests/integration/lib/server';
import { beforeEach, describe, expect, it } from 'vitest';
describe('TeamEmail API - Create', () => {
  let client: ApiClient;

  beforeEach(async () => {
    client = new ApiClient(TestServer.getUrl());
  });

  // POST /api/team-email
  describe('POST /api/team-email', () => {
    it('should allow member to create teamEmail', async () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const actor = await client.as('user', {});

      const payload = {};

      const res = await client.post('/api/team-email', payload);

      expect(res.status).toBe(201);
      expect(res.body.data).toBeDefined();

      const created = await Factory.prisma.teamEmail.findUnique({
        where: { id: res.body.data.id },
      });
      expect(created).toBeDefined();
    });

    it('should forbid non-admin/unauthorized users', async () => {
      client.useToken('invalid-token');
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const actor = undefined as unknown;

      const payload = {};
      const res = await client.post('/api/team-email', payload);
      expect([401, 403, 404]).toContain(res.status);
    });
  });
});
