import { Prisma } from '@prisma/client'

import prisma from '@/libs/db'
import PrismaModel, { IncludeOptions } from '@/types/prismaModel'
import ModelTypes from '@/types/modelTypes'

import getIncludeOption from './getIncludeOption'

/**
 * Generates the model functions based on the provided modelName.
 *
 * @param {T} modelName - The name of the model for which to generate functions.
 * @return {PrismaModel<T>} The generated model functions.
 */
const getModel = <T extends keyof ModelTypes>(modelName: T): PrismaModel<T> => {
  const include: IncludeOptions = getIncludeOption(modelName)

  switch (modelName) {
    case 'user':
      return {
        findMany: args => prisma.user.findMany({ ...args, include }),
        findUnique: ({ where, include: customInclude }) =>
          prisma.user.findUnique({
            where,
            include: customInclude || include,
          }),
        findFirst: args => prisma.user.findFirst({ ...args, include }),
        create: (data, customInclude) =>
          prisma.user.create({
            data: data as Prisma.UserCreateInput,
            include: customInclude || include,
          }),
        update: ({ where, data, include: customInclude }) =>
          prisma.user.update({
            where: { id: where.id },
            data: data as Prisma.UserUpdateInput,
            include: customInclude || include,
          }),
        delete: ({ where }) => prisma.user.delete({ where }).then(() => {}),
      } as PrismaModel<T>

    case 'clinic':
      return {
        findMany: args => prisma.clinic.findMany({ ...args, include }),
        findUnique: ({ where, include: customInclude }) =>
          prisma.clinic.findUnique({
            where,
            include: customInclude || include,
          }),
        findFirst: args => prisma.clinic.findFirst({ ...args, include }),
        create: (data, customInclude) =>
          prisma.clinic.create({
            data: data as Prisma.ClinicCreateInput,
            include: customInclude || include,
          }),
        update: ({ where, data, include: customInclude }) =>
          prisma.clinic.update({
            where: { id: where.id },
            data: data as Prisma.ClinicUpdateInput,
            include: customInclude || include,
          }),
        delete: ({ where }) => prisma.clinic.delete({ where }).then(() => {}),
      } as PrismaModel<T>

    case 'dentist':
      return {
        findMany: args => prisma.dentist.findMany({ ...args, include }),
        findUnique: ({ where, include: customInclude }) =>
          prisma.dentist.findUnique({
            where,
            include: customInclude || include,
          }),
        findFirst: args => prisma.dentist.findFirst({ ...args, include }),
        create: (data, customInclude) =>
          prisma.dentist.create({
            data: data as Prisma.DentistCreateInput,
            include: customInclude || include,
          }),
        update: ({ where, data, include: customInclude }) =>
          prisma.dentist.update({
            where: { id: where.id },
            data: data as Prisma.DentistUpdateInput,
            include: customInclude || include,
          }),
        delete: ({ where }) => prisma.dentist.delete({ where }).then(() => {}),
      } as PrismaModel<T>

    case 'product':
      return {
        findMany: args => prisma.product.findMany({ ...args, include }),
        findUnique: ({ where, include: customInclude }) =>
          prisma.product.findUnique({
            where,
            include: customInclude || include,
          }),
        findFirst: args => prisma.product.findFirst({ ...args, include }),
        create: (data, customInclude) =>
          prisma.product.create({
            data: data as Prisma.ProductCreateInput,
            include: customInclude || include,
          }),
        update: ({ where, data, include: customInclude }) =>
          prisma.product.update({
            where: { id: where.id },
            data: data as Prisma.ProductUpdateInput,
            include: customInclude || include,
          }),
        delete: ({ where }) => prisma.product.delete({ where }).then(() => {}),
      } as PrismaModel<T>

    case 'socialMedia':
      return {
        findMany: args => prisma.socialMedia.findMany({ ...args, include }),
        findUnique: ({ where, include: customInclude }) =>
          prisma.socialMedia.findUnique({
            where,
            include: customInclude || include,
          }),
        findFirst: args => prisma.socialMedia.findFirst({ ...args, include }),
        create: (data, customInclude) =>
          prisma.socialMedia.create({
            data: data as Prisma.SocialMediaCreateInput,
            include: customInclude || include,
          }),
        update: ({ where, data, include: customInclude }) =>
          prisma.socialMedia.update({
            where: { id: where.id },
            data: data as Prisma.SocialMediaUpdateInput,
            include: customInclude || include,
          }),
        delete: ({ where }) =>
          prisma.socialMedia.delete({ where }).then(() => {}),
      } as PrismaModel<T>

    case 'notification':
      return {
        findMany: args => prisma.notification.findMany({ ...args, include }),
        findUnique: ({ where, include: customInclude }) =>
          prisma.notification.findUnique({
            where,
            include: customInclude || include,
          }),
        findFirst: args => prisma.notification.findFirst({ ...args, include }),
        create: (data, customInclude) =>
          prisma.notification.create({
            data: data as Prisma.NotificationCreateInput,
            include: customInclude || include,
          }),
        update: ({ where, data, include: customInclude }) =>
          prisma.notification.update({
            where: { id: where.id },
            data: data as Prisma.NotificationUpdateInput,
            include: customInclude || include,
          }),
        delete: ({ where }) =>
          prisma.notification.delete({ where }).then(() => {}),
      } as PrismaModel<T>

    case 'ticket':
      return {
        findMany: args => prisma.ticket.findMany({ ...args, include }),
        findUnique: ({ where, include: customInclude }) =>
          prisma.ticket.findUnique({
            where,
            include: customInclude || include,
          }),
        findFirst: args => prisma.ticket.findFirst({ ...args, include }),
        create: (data, customInclude) =>
          prisma.ticket.create({
            data: data as Prisma.TicketCreateInput,
            include: customInclude || include,
          }),
        update: ({ where, data, include: customInclude }) =>
          prisma.ticket.update({
            where: { id: where.id },
            data: data as Prisma.TicketUpdateInput,
            include: customInclude || include,
          }),
        delete: ({ where }) => prisma.ticket.delete({ where }).then(() => {}),
      } as PrismaModel<T>

    default:
      throw new Error(`Model ${modelName} not found`)
  }
}

export default getModel
