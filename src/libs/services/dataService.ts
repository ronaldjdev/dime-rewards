import { PrismaClient, Prisma } from '@prisma/client'

import { ModelName } from '@/types/prismaDelegate'

const prisma = new PrismaClient()

const isModelName = (modelName: unknown): modelName is ModelName => {
  return (
    typeof modelName === 'string' &&
    ['user', 'dentist', 'product', 'clinic', 'ticket'].includes(modelName)
  )
}

type ModelTypes = {
  user: Prisma.UserCreateInput | Prisma.UserUpdateInput
  dentist: Prisma.DentistCreateInput | Prisma.DentistUpdateInput
  product: Prisma.ProductCreateInput | Prisma.ProductUpdateInput
  clinic: Prisma.ClinicCreateInput | Prisma.ClinicUpdateInput
  ticket: Prisma.TicketCreateInput | Prisma.TicketUpdateInput
}

type PrismaModel<T extends keyof ModelTypes> = {
  findMany: () => Promise<ModelTypes[T][]>
  findUnique: (args: { where: { id: string } }) => Promise<ModelTypes[T] | null>
  create: (data: ModelTypes[T]) => Promise<ModelTypes[T]>
  update: (args: {
    where: { id: string }
    data: ModelTypes[T]
  }) => Promise<ModelTypes[T]>
  delete: (args: { where: { id: string } }) => Promise<void>
}

const getModel = <T extends keyof ModelTypes>(modelName: T): PrismaModel<T> => {
  switch (modelName) {
    case 'user':
      return {
        findMany: () => prisma.user.findMany(),
        findUnique: ({ where }) => prisma.user.findUnique({ where }),
        create: data =>
          prisma.user.create({ data: data as Prisma.UserCreateInput }),
        update: ({ where, data }) =>
          prisma.user.update({
            where: { id: where.id },
            data: data as Prisma.UserUpdateInput,
          }),
        delete: ({ where }) => prisma.user.delete({ where }).then(() => {}),
      } as PrismaModel<T>
    case 'dentist':
      return {
        findMany: () => prisma.dentist.findMany(),
        findUnique: ({ where }) => prisma.dentist.findUnique({ where }),
        create: data =>
          prisma.dentist.create({ data: data as Prisma.DentistCreateInput }),
        update: ({ where, data }) =>
          prisma.dentist.update({
            where: { id: where.id },
            data: data as Prisma.DentistUpdateInput,
          }),
        delete: ({ where }) => prisma.dentist.delete({ where }).then(() => {}),
      } as PrismaModel<T>
    case 'product':
      return {
        findMany: () => prisma.product.findMany(),
        findUnique: ({ where }) => prisma.product.findUnique({ where }),
        create: data =>
          prisma.product.create({ data: data as Prisma.ProductCreateInput }),
        update: ({ where, data }) =>
          prisma.product.update({
            where: { id: where.id },
            data: data as Prisma.ProductUpdateInput,
          }),
        delete: ({ where }) => prisma.product.delete({ where }).then(() => {}),
      } as PrismaModel<T>
    case 'clinic':
      return {
        findMany: () => prisma.clinic.findMany(),
        findUnique: ({ where }) => prisma.clinic.findUnique({ where }),
        create: data =>
          prisma.clinic.create({ data: data as Prisma.ClinicCreateInput }),
        update: ({ where, data }) =>
          prisma.clinic.update({
            where: { id: where.id },
            data: data as Prisma.ClinicUpdateInput,
          }),
        delete: ({ where }) => prisma.clinic.delete({ where }).then(() => {}),
      } as PrismaModel<T>
    case 'ticket':
      return {
        findMany: () => prisma.ticket.findMany(),
        findUnique: ({ where }) => prisma.ticket.findUnique({ where }),
        create: data =>
          prisma.ticket.create({ data: data as Prisma.TicketCreateInput }),
        update: ({ where, data }) =>
          prisma.ticket.update({
            where: { id: where.id },
            data: data as Prisma.TicketUpdateInput,
          }),
        delete: ({ where }) => prisma.ticket.delete({ where }).then(() => {}),
      } as PrismaModel<T>
    default:
      throw new Error(`Model ${modelName} not found`)
  }
}

export const dataService = {
  async getAll<T extends keyof ModelTypes>(
    modelName: T,
  ): Promise<ModelTypes[T][]> {
    if (!isModelName(modelName)) {
      throw new Error(`Model ${String(modelName)} not found`)
    }

    try {
      const model = getModel(modelName)
      return await model.findMany()
    } catch (error) {
      throw new Error(`Error al obtener los datos: ${(error as Error).message}`)
    }
  },

  async getById<T extends keyof ModelTypes>(
    modelName: T,
    id: string,
  ): Promise<ModelTypes[T] | null> {
    if (!isModelName(modelName)) {
      throw new Error(`Model ${String(modelName)} not found`)
    }

    try {
      const model = getModel(modelName)
      return await model.findUnique({ where: { id } })
    } catch (error) {
      throw new Error(
        `Error al obtener el elemento: ${(error as Error).message}`,
      )
    }
  },

  async create<T extends keyof ModelTypes>(
    modelName: T,
    data: ModelTypes[T],
  ): Promise<ModelTypes[T]> {
    if (!isModelName(modelName)) {
      throw new Error(`Model ${String(modelName)} not found`)
    }

    try {
      const model = getModel(modelName)
      return await model.create(data)
    } catch (error) {
      console.error(error)
      throw new Error(`Error al crear el elemento: ${(error as Error).message}`)
    }
  },

  async update<T extends keyof ModelTypes>(
    modelName: T,
    id: string,
    data: Omit<ModelTypes[T], 'id'>,
  ): Promise<ModelTypes[T]> {
    if (!isModelName(modelName)) {
      throw new Error(`Model ${String(modelName)} not found`)
    }

    try {
      const model = getModel(modelName)
      return await model.update({ where: { id }, data })
    } catch (error) {
      throw new Error(
        `Error al actualizar el elemento: ${(error as Error).message}`,
      )
    }
  },

  async destroy(modelName: ModelName, id: string): Promise<void> {
    if (!isModelName(modelName)) {
      throw new Error(`Model ${String(modelName)} not found`)
    }

    try {
      const model = getModel(modelName)
      await model.delete({ where: { id } })
    } catch (error) {
      throw new Error(
        `Error al eliminar el elemento: ${(error as Error).message}`,
      )
    }
  },
}
