/**
 * Servicio de datos para realizar operaciones CRUD con modelos de base de datos.
 */
export const dataService = {
  /**
   * Obtiene todos los registros de un modelo dado.
   *
   * @template T - El tipo de los registros a obtener.
   * @param {PrismaDelegate} modelName - El modelo de base de datos del cual se obtendrán los registros.
   * @returns {Promise<T[]>} - Una promesa que resuelve en una lista de registros del tipo T.
   * @throws {Error} - Si ocurre un error al obtener los datos.
   */
  async getAll<T>(modelName: PrismaDelegate<T>): Promise<T[]> {
    try {
      const data = await modelName.findMany()
      return data
    } catch (error) {
      throw new Error(`Error al obtener los datos`)
    }
  },

  /**
   * Obtiene un registro por su ID.
   *
   * @template T - El tipo del registro a obtener.
   * @param {PrismaDelegate} modelName - El modelo de base de datos del cual se obtendrá el registro.
   * @param {string} id - El ID del registro a obtener.
   * @returns {Promise<T | null>} - Una promesa que resuelve en el registro obtenido o null si no se encuentra.
   * @throws {Error} - Si ocurre un error al obtener el registro.
   */
  async getById<T>(
    modelName: PrismaDelegate<T>,
    id: string,
  ): Promise<T | null> {
    try {
      const data = await modelName.findUnique({
        where: { id },
      })
      return data
    } catch (error) {
      throw new Error(`Error al obtener el elemento`)
    }
  },

  /**
   * Crea un nuevo registro.
   *
   * @template T - El tipo del registro a crear.
   * @param {PrismaDelegate} modelName - El modelo de base de datos en el cual se creará el registro.
   * @param {Omit<T, 'id'>} data - Los datos del nuevo registro, excluyendo el ID.
   * @returns {Promise<T>} - Una promesa que resuelve en el registro creado.
   * @throws {Error} - Si ocurre un error al crear el registro.
   */
  async create<T>(
    modelName: PrismaDelegate<T>,
    data: Omit<T, 'id'>,
  ): Promise<T> {
    try {
      const newData = await modelName.create({
        data,
      })
      return newData
    } catch (error) {
      console.error(error)
      throw new Error(`Error al crear el elemento`)
    }
  },

  /**
   * Actualiza un registro existente.
   *
   * @template T - El tipo del registro a actualizar.
   * @param {PrismaDelegate} modelName - El modelo de base de datos en el cual se actualizará el registro.
   * @param {string} id - El ID del registro a actualizar.
   * @param {Omit<T, 'id'>} data - Los nuevos datos del registro, excluyendo el ID.
   * @returns {Promise<T>} - Una promesa que resuelve en el registro actualizado.
   * @throws {Error} - Si ocurre un error al actualizar el registro.
   */
  async update<T>(
    modelName: PrismaDelegate<T>,
    id: string,
    data: Omit<T, 'id'>,
  ): Promise<T> {
    try {
      const updatedData = await modelName.update({
        where: { id },
        data,
      })
      return updatedData
    } catch (error) {
      throw new Error(`Error al actualizar el elemento`)
    }
  },

  /**
   * Elimina un registro por su ID.
   *
   * @template T - El tipo del registro a eliminar.
   * @param {PrismaDelegate} modelName - El modelo de base de datos del cual se eliminará el registro.
   * @param {string} id - El ID del registro a eliminar.
   * @returns {Promise<void>} - Una promesa que resuelve cuando el registro ha sido eliminado.
   * @throws {Error} - Si ocurre un error al eliminar el registro.
   */
  async destroy<T>(modelName: PrismaDelegate<T>, id: string): Promise<void> {
    try {
      await modelName.delete({
        where: { id },
      })
    } catch (error) {
      throw new Error(`Error al eliminar el elemento`)
    }
  },
}

// Definición de PrismaDelegate para tipar los modelos de Prisma
interface PrismaDelegate<T> {
  findMany: () => Promise<T[]>
  findUnique: (args: { where: { id: string } }) => Promise<T | null>
  create: (args: { data: Omit<T, 'id'> }) => Promise<T>
  update: (args: { where: { id: string }; data: Omit<T, 'id'> }) => Promise<T>
  delete: (args: { where: { id: string } }) => Promise<void>
}
