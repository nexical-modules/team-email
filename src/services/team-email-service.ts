// GENERATED CODE - DO NOT MODIFY
import type { ApiActor } from '@/lib/api/api-docs';
import { db } from '@/lib/core/db';
import { Logger } from '@/lib/core/logger';
import { HookSystem } from '@/lib/modules/hooks';
import type { ServiceResponse } from '@/types/service';
import type { Prisma, TeamEmail } from '@prisma/client';

/** Service class for TeamEmail-related business logic. */
export class TeamEmailService {
  public static async list(
    params?: Prisma.TeamEmailFindManyArgs,
    actor?: ApiActor,
  ): Promise<ServiceResponse<TeamEmail[]>> {
    try {
      let { where, take, skip, orderBy, select } = params || {};

      // Allow hooks to modify the query parameters (e.g. for scoping)
      // Pass actor context if available
      const filteredParams = await HookSystem.filter('teamEmail.beforeList', {
        where,
        take,
        skip,
        orderBy,
        select,
        actor,
      });
      where = filteredParams.where;
      take = filteredParams.take;
      skip = filteredParams.skip;
      orderBy = filteredParams.orderBy;
      select = filteredParams.select;

      const [data, total] = await db.$transaction([
        db.teamEmail.findMany({ where, take, skip, orderBy, select }),
        db.teamEmail.count({ where }),
      ]);

      const filteredData = await HookSystem.filter('teamEmail.list', data);

      return { success: true, data: filteredData, total };
    } catch (error) {
      Logger.error('TeamEmail list Error', error);
      return { success: false, error: 'teamEmail.service.error.list_failed' };
    }
  }

  public static async get(
    id: string,
    select?: Prisma.TeamEmailSelect,
    actor?: ApiActor,
  ): Promise<ServiceResponse<TeamEmail | null>> {
    try {
      const data = await db.teamEmail.findUnique({ where: { id }, select });
      if (!data) return { success: false, error: 'teamEmail.service.error.not_found' };

      const filtered = await HookSystem.filter('teamEmail.read', data, { actor });

      return { success: true, data: filtered };
    } catch (error) {
      Logger.error('TeamEmail get Error', error);
      return { success: false, error: 'teamEmail.service.error.get_failed' };
    }
  }

  public static async create(
    data: Prisma.TeamEmailCreateInput,
    select?: Prisma.TeamEmailSelect,
    actor?: ApiActor,
  ): Promise<ServiceResponse<TeamEmail>> {
    try {
      // Pass actor context to hooks for security/authorship validation
      const input = await HookSystem.filter('teamEmail.beforeCreate', data, { actor });

      const newItem = await db.$transaction(async (tx) => {
        const created = await tx.teamEmail.create({
          data: input as Prisma.TeamEmailCreateInput,
          select,
        });
        await HookSystem.dispatch('teamEmail.created', {
          id: created.id,
          actorId: actor?.id || 'system',
        });
        return created;
      });

      const filtered = await HookSystem.filter('teamEmail.read', newItem, { actor });

      return { success: true, data: filtered };
    } catch (error) {
      Logger.error('TeamEmail create Error', error);
      return { success: false, error: 'teamEmail.service.error.create_failed' };
    }
  }

  public static async update(
    id: string,
    data: Prisma.TeamEmailUpdateInput,
    select?: Prisma.TeamEmailSelect,
    actor?: ApiActor,
  ): Promise<ServiceResponse<TeamEmail>> {
    try {
      const input = await HookSystem.filter('teamEmail.beforeUpdate', data, { actor, id });

      const updatedItem = await db.$transaction(async (tx) => {
        const updated = await tx.teamEmail.update({
          where: { id },
          data: input as Prisma.TeamEmailUpdateInput,
          select,
        });
        await HookSystem.dispatch('teamEmail.updated', {
          id,
          changes: Object.keys(input),
          actorId: actor?.id,
        });
        return updated;
      });

      const filtered = await HookSystem.filter('teamEmail.read', updatedItem, { actor });

      return { success: true, data: filtered };
    } catch (error) {
      Logger.error('TeamEmail update Error', error);
      return { success: false, error: 'teamEmail.service.error.update_failed' };
    }
  }

  public static async delete(id: string, actor?: ApiActor): Promise<ServiceResponse<void>> {
    try {
      await db.$transaction(async (tx) => {
        await tx.teamEmail.delete({ where: { id } });
        await HookSystem.dispatch('teamEmail.deleted', { id, actorId: actor?.id });
      });
      return { success: true };
    } catch (error) {
      Logger.error('TeamEmail delete Error', error);
      return { success: false, error: 'teamEmail.service.error.delete_failed' };
    }
  }
}
