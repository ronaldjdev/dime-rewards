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
        /**
         * Find many users with optional arguments.
         *
         * @param {Prisma.UserFindManyArgs} args - The arguments for finding many users.
         * @return {Promise<User[]>} The list of users.
         */
        findMany: args => prisma.user.findMany({ ...args, include }),

        
        /**
         * Find a unique user based on the provided 'where' condition and optional custom include.
         *
         * @param {object} where - The condition to find the unique user.
         * @param {IncludeOptions} [include] - The custom include options.
         * @return {Promise<User | null>} The unique user if found, otherwise null.
         */
        findUnique: ({ where, include: customInclude }) =>
          prisma.user.findUnique({
            where,
            include: customInclude || include,
          }),

        /**
         * Create a new user with the provided data and optional custom include.
         *
         * @param {Prisma.UserCreateInput} data - The data to create the user.
         * @param {IncludeOptions} [include] - The custom include options.
         * @return {Promise<User>} The created user.
         */
        create: (data, customInclude) =>
          prisma.user.create({
            data: data as Prisma.UserCreateInput,
            include: customInclude || include,
          }),

        /**
         * Update an existing user based on the provided 'where' condition and data.
         *
         * @param {object} where - The condition to find the user.
         * @param {Prisma.UserUpdateInput} data - The data to update the user.
         * @param {IncludeOptions} [include] - The custom include options.
         * @return {Promise<User>} The updated user.
         */
        update: ({ where, data, include: customInclude }) =>
          prisma.user.update({
            where: { id: where.id },
            data: data as Prisma.UserUpdateInput,
            include: customInclude || include,
          }),

        /**
         * Delete an existing user based on the provided 'where' condition.
         *
         * @param {object} where - The condition to find the user.
         * @return {Promise<void>} An empty promise indicating the user was deleted.
         */
        delete: ({ where }) => prisma.user.delete({ where }).then(() => {}),
      } as PrismaModel<T>

    case 'clinic':
      return {
        /**
         * Find many clinics with optional arguments.
         *
         * @param {Prisma.ClinicFindManyArgs} args - The arguments for finding many clinics.
         * @return {Promise<Clinic[]>} The list of clinics.
         */
        findMany: args => prisma.clinic.findMany({ ...args, include }),

        /**
         * Find a unique clinic based on the provided 'where' condition and optional custom include.
         *
         * @param {object} where - The condition to find the unique clinic.
         * @param {IncludeOptions} [include] - The custom include options.
         * @return {Promise<Clinic | null>} The unique clinic if found, otherwise null.
         */
        findUnique: ({ where, include: customInclude }) =>
          prisma.clinic.findUnique({
            where,
            include: customInclude || include,
          }),

        /**
         * Create a new clinic with the provided data and optional custom include.
         *
         * @param {Prisma.ClinicCreateInput} data - The data to create the clinic.
         * @param {IncludeOptions} [include] - The custom include options.
         * @return {Promise<Clinic>} The created clinic.
         */
        create: (data, customInclude) =>
          prisma.clinic.create({
            data: data as Prisma.ClinicCreateInput,
            include: customInclude || include,
          }),

        /**
         * Update an existing clinic based on the provided 'where' condition and data.
         *
         * @param {object} where - The condition to find the clinic.
         * @param {Prisma.ClinicUpdateInput} data - The data to update the clinic.
         * @param {IncludeOptions} [include] - The custom include options.
         * @return {Promise<Clinic>} The updated clinic.
         */
        update: ({ where, data, include: customInclude }) =>
          prisma.clinic.update({
            where: { id: where.id },
            data: data as Prisma.ClinicUpdateInput,
            include: customInclude || include,
          }),

        /**
         * Delete an existing clinic based on the provided 'where' condition.
         *
         * @param {object} where - The condition to find the clinic.
         * @return {Promise<void>} An empty promise indicating the clinic was deleted.
         */
        delete: ({ where }) => prisma.clinic.delete({ where }).then(() => {}),
      } as PrismaModel<T>

    case 'dentist':
      return {
        /**
         * Find many dentists with optional arguments.
         *
         * @param {Prisma.DentistFindManyArgs} args - The arguments for finding many dentists.
         * @return {Promise<Dentist[]>} The list of dentists.
         */
        findMany: args => prisma.dentist.findMany({ ...args, include }),

        /**
         * Find a unique dentist based on the provided 'where' condition and optional custom include.
         *
         * @param {object} where - The condition to find the unique dentist.
         * @param {IncludeOptions} [include] - The custom include options.
         * @return {Promise<Dentist | null>} The unique dentist if found, otherwise null.
         */
        findUnique: ({ where, include: customInclude }) =>
          prisma.dentist.findUnique({
            where,
            include: customInclude || include,
          }),

        /**
         * Create a new dentist with the provided data and optional custom include.
         *
         * @param {Prisma.DentistCreateInput} data - The data to create the dentist.
         * @param {IncludeOptions} [include] - The custom include options.
         * @return {Promise<Dentist>} The created dentist.
         */
        create: (data, customInclude) =>
          prisma.dentist.create({
            data: data as Prisma.DentistCreateInput,
            include: customInclude || include,
          }),

        /**
         * Update an existing dentist based on the provided 'where' condition and data.
         *
         * @param {object} where - The condition to find the dentist.
         * @param {Prisma.DentistUpdateInput} data - The data to update the dentist.
         * @param {IncludeOptions} [include] - The custom include options.
         * @return {Promise<Dentist>} The updated dentist.
         */
        update: ({ where, data, include: customInclude }) =>
          prisma.dentist.update({
            where: { id: where.id },
            data: data as Prisma.DentistUpdateInput,
            include: customInclude || include,
          }),

        /**
         * Delete an existing dentist based on the provided 'where' condition.
         *
         * @param {object} where - The condition to find the dentist.
         * @return {Promise<void>} An empty promise indicating the dentist was deleted.
         */
        delete: ({ where }) => prisma.dentist.delete({ where }).then(() => {}),
      } as PrismaModel<T>

    case 'product':
      return {
        /**
         * Find many products with optional arguments.
         *
         * @param {Prisma.ProductFindManyArgs} args - The arguments for finding many products.
         * @return {Promise<Product[]>} The list of products.
         */
        findMany: args => prisma.product.findMany({ ...args, include }),

        /**
         * Find a unique product based on the provided 'where' condition and optional custom include.
         *
         * @param {object} where - The condition to find the unique product.
         * @param {IncludeOptions} [include] - The custom include options.
         * @return {Promise<Product | null>} The unique product if found, otherwise null.
         */
        findUnique: ({ where, include: customInclude }) =>
          prisma.product.findUnique({
            where,
            include: customInclude || include,
          }),

        /**
         * Create a new product with the provided data and optional custom include.
         *
         * @param {Prisma.ProductCreateInput} data - The data to create the product.
         * @param {IncludeOptions} [include] - The custom include options.
         * @return {Promise<Product>} The created product.
         */
        create: (data, customInclude) =>
          prisma.product.create({
            data: data as Prisma.ProductCreateInput,
            include: customInclude || include,
          }),

        /**
         * Update an existing product based on the provided 'where' condition and data.
         *
         * @param {object} where - The condition to find the product.
         * @param {Prisma.ProductUpdateInput} data - The data to update the product.
         * @param {IncludeOptions} [include] - The custom include options.
         * @return {Promise<Product>} The updated product.
         */
        update: ({ where, data, include: customInclude }) =>
          prisma.product.update({
            where: { id: where.id },
            data: data as Prisma.ProductUpdateInput,
            include: customInclude || include,
          }),

        /**
         * Delete an existing product based on the provided 'where' condition.
         *
         * @param {object} where - The condition to find the product.
         * @return {Promise<void>} An empty promise indicating the product was deleted.
         */
        delete: ({ where }) => prisma.product.delete({ where }).then(() => {}),
      } as PrismaModel<T>

    case 'socialMedia':
      return {
        /**
         * Find many social media entries with optional arguments.
         *
         * @param {Prisma.SocialMediaFindManyArgs} args - The arguments for finding many social media entries.
         * @return {Promise<SocialMedia[]>} The list of social media entries.
         */
        findMany: args => prisma.socialMedia.findMany({ ...args, include }),

        /**
         * Find a unique social media entry based on the provided 'where' condition and optional custom include.
         *
         * @param {object} where - The condition to find the unique social media entry.
         * @param {IncludeOptions} [include] - The custom include options.
         * @return {Promise<SocialMedia | null>} The unique social media entry if found, otherwise null.
         */
        findUnique: ({ where, include: customInclude }) =>
          prisma.socialMedia.findUnique({
            where,
            include: customInclude || include,
          }),

        /**
         * Create a new social media entry with the provided data and optional custom include.
         *
         * @param {Prisma.SocialMediaCreateInput} data - The data to create the social media entry.
         * @param {IncludeOptions} [include] - The custom include options.
         * @return {Promise<SocialMedia>} The created social media entry.
         */
        create: (data, customInclude) =>
          prisma.socialMedia.create({
            data: data as Prisma.SocialMediaCreateInput,
            include: customInclude || include,
          }),

        /**
         * Update an existing social media entry based on the provided 'where' condition and data.
         *
         * @param {object} where - The condition to find the social media entry.
         * @param {Prisma.SocialMediaUpdateInput} data - The data to update the social media entry.
         * @param {IncludeOptions} [include] - The custom include options.
         * @return {Promise<SocialMedia>} The updated social media entry.
         */
        update: ({ where, data, include: customInclude }) =>
          prisma.socialMedia.update({
            where: { id: where.id },
            data: data as Prisma.SocialMediaUpdateInput,
            include: customInclude || include,
          }),

        /**
         * Delete an existing social media entry based on the provided 'where' condition.
         *
         * @param {object} where - The condition to find the social media entry.
         * @return {Promise<void>} An empty promise indicating the social media entry was deleted.
         */
        delete: ({ where }) =>
          prisma.socialMedia.delete({ where }).then(() => {}),
      } as PrismaModel<T>

    case 'notification':
      return {
        /**
         * Find many notifications with optional arguments.
         *
         * @param {Prisma.NotificationFindManyArgs} args - The arguments for finding many notifications.
         * @return {Promise<Notification[]>} The list of notifications.
         */
        findMany: args => prisma.notification.findMany({ ...args, include }),

        /**
         * Find a unique notification based on the provided 'where' condition and optional custom include.
         *
         * @param {object} where - The condition to find the unique notification.
         * @param {IncludeOptions} [include] - The custom include options.
         * @return {Promise<Notification | null>} The unique notification if found, otherwise null.
         */
        findUnique: ({ where, include: customInclude }) =>
          prisma.notification.findUnique({
            where,
            include: customInclude || include,
          }),

        /**
         * Create a new notification with the provided data and optional custom include.
         *
         * @param {Prisma.NotificationCreateInput} data - The data to create the notification.
         * @param {IncludeOptions} [include] - The custom include options.
         * @return {Promise<Notification>} The created notification.
         */
        create: (data, customInclude) =>
          prisma.notification.create({
            data: data as Prisma.NotificationCreateInput,
            include: customInclude || include,
          }),

        /**
         * Update an existing notification based on the provided 'where' condition and data.
         *
         * @param {object} where - The condition to find the notification.
         * @param {Prisma.NotificationUpdateInput} data - The data to update the notification.
         * @param {IncludeOptions} [include] - The custom include options.
         * @return {Promise<Notification>} The updated notification.
         */
        update: ({ where, data, include: customInclude }) =>
          prisma.notification.update({
            where: { id: where.id },
            data: data as Prisma.NotificationUpdateInput,
            include: customInclude || include,
          }),

        /**
         * Delete an existing notification based on the provided 'where' condition.
         *
         * @param {object} where - The condition to find the notification.
         * @return {Promise<void>} An empty promise indicating the notification was deleted.
         */
        delete: ({ where }) =>
          prisma.notification.delete({ where }).then(() => {}),
      } as PrismaModel<T>

    case 'ticket':
      return {
        /**
         * Find many tickets with optional arguments.
         *
         * @param {Prisma.TicketFindManyArgs} args - The arguments for finding many tickets.
         * @return {Promise<Ticket[]>} The list of tickets.
         */
        findMany: args => prisma.ticket.findMany({ ...args, include }),

        /**
         * Find a unique ticket based on the provided 'where' condition and optional custom include.
         *
         * @param {object} where - The condition to find the unique ticket.
         * @param {IncludeOptions} [include] - The custom include options.
         * @return {Promise<Ticket | null>} The unique ticket if found, otherwise null.
         */
        findUnique: ({ where, include: customInclude }) =>
          prisma.ticket.findUnique({
            where,
            include: customInclude || include,
          }),

        /**
         * Create a new ticket with the provided data and optional custom include.
         *
         * @param {Prisma.TicketCreateInput} data - The data to create the ticket.
         * @param {IncludeOptions} [include] - The custom include options.
         * @return {Promise<Ticket>} The created ticket.
         */
        create: (data, customInclude) =>
          prisma.ticket.create({
            data: data as Prisma.TicketCreateInput,
            include: customInclude || include,
          }),

        /**
         * Update an existing ticket based on the provided 'where' condition and data.
         *
         * @param {object} where - The condition to find the ticket.
         * @param {Prisma.TicketUpdateInput} data - The data to update the ticket.
         * @param {IncludeOptions} [include] - The custom include options.
         * @return {Promise<Ticket>} The updated ticket.
         */
        update: ({ where, data, include: customInclude }) =>
          prisma.ticket.update({
            where: { id: where.id },
            data: data as Prisma.TicketUpdateInput,
            include: customInclude || include,
          }),

        /**
         * Delete an existing ticket based on the provided 'where' condition.
         *
         * @param {object} where - The condition to find the ticket.
         * @return {Promise<void>} An empty promise indicating the ticket was deleted.
         */
        delete: ({ where }) => prisma.ticket.delete({ where }).then(() => {}),
      } as PrismaModel<T>

    default:
      throw new Error(`Model ${modelName} not found`)
  }
}

export default getModel

