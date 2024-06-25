import ModelTypes from '@/types/modelTypes'
import ModelName from '@/types/modelName'
import { PaginatedArgs } from '@/types/prismaModel'

import getModel from './getModel'
import isModelName from './isModelName'

export const dataService = {
  async getAll<T extends keyof ModelTypes>(
    modelName: T,
    paginationArgs?: PaginatedArgs,
  ): Promise<ModelTypes[T][]> {
    if (!isModelName(modelName)) {
      throw new Error(`Model ${String(modelName)} not found`)
    }

    try {
      const model = getModel(modelName)
      return await model.findMany(paginationArgs)
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
