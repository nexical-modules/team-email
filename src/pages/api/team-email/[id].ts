// GENERATED CODE - DO NOT MODIFY
import { defineApi } from '@/lib/api/api-docs';
import { ApiGuard } from '@/lib/api/api-guard';
import { TeamEmailService } from '@modules/team-email/src/services/team-email-service';
import { z } from 'zod';

export const GET = defineApi(
  async (context, actor) => {
    const { id } = context.params;

    // Security Check
    await ApiGuard.protect(context, 'USER_EMPLOYEE', { ...context.params });

    const select = {
      id: true,
      name: true,
      createdAt: true,
      updatedAt: true,
    };
    const result = await TeamEmailService.get(id, select, actor);

    if (!result.success) {
      throw new Error(result.error || 'Internal Server Error');
    }

    if (!result.data) {
      throw new Error('TeamEmail not found');
    }

    return { success: true, data: result.data };
  },
  {
    summary: 'Get TeamEmail',
    tags: ['TeamEmail'],
    parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],

    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                name: { type: 'string' },
                createdAt: { type: 'string', format: 'date-time' },
                updatedAt: { type: 'string', format: 'date-time' },
              },
              required: ['updatedAt'],
            },
          },
        },
      },
    },
  },
);
export const PUT = defineApi(
  async (context, actor) => {
    const { id } = context.params;
    const body = await context.request.json();

    // Security Check
    await ApiGuard.protect(context, 'USER_EMPLOYEE', { ...context.params, ...body });

    // Zod Validation
    const schema = z.object({
      id: z.string().optional(),
      name: z.string().optional(),
    });
    const validated = schema.parse(body);
    const select = {
      id: true,
      name: true,
      createdAt: true,
      updatedAt: true,
    };
    const result = await TeamEmailService.update(id, validated, select, actor);

    if (!result.success) {
      throw new Error(result.error || 'Internal Server Error');
    }

    return new Response(JSON.stringify({ success: true, data: result.data }), { status: 200 });
  },
  {
    summary: 'Update TeamEmail',
    tags: ['TeamEmail'],
    parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              name: { type: 'string' },
              createdAt: { type: 'string', format: 'date-time' },
              updatedAt: { type: 'string', format: 'date-time' },
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                name: { type: 'string' },
                createdAt: { type: 'string', format: 'date-time' },
                updatedAt: { type: 'string', format: 'date-time' },
              },
              required: ['updatedAt'],
            },
          },
        },
      },
    },
  },
);
export const DELETE = defineApi(
  async (context, actor) => {
    const { id } = context.params;

    // Security Check
    await ApiGuard.protect(context, 'USER_EMPLOYEE', { ...context.params });

    const result = await TeamEmailService.delete(id, actor);

    if (!result.success) {
      throw new Error(result.error || 'Internal Server Error');
    }

    return { success: true };
  },
  {
    summary: 'Delete TeamEmail',
    tags: ['TeamEmail'],
    parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],

    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                success: { type: 'boolean' },
              },
            },
          },
        },
      },
    },
  },
);
