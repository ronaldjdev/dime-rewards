/**
 * A delegate for interacting with a Prisma ORM model.
 */
export interface PrismaDelegate<T> {
  /**
   * Returns a promise that resolves to an array of all records of type `T`.
   */
  findMany: () => Promise<T[]>

  /**
   * Returns a promise that resolves to a single record of type `T` that matches the provided `id` in `args`, or `null` if no match is found.
   * @param args.where.id - The ID of the record to find.
   */
  findUnique: (args: { where: { id: string } }) => Promise<T | null>

  /**
   * Creates a new record of type `T` with the provided `data` in `args`, and returns a promise that resolves to the newly created record.
   * @param args.data - The data for the new record.
   */
  create: (args: { data: Omit<T, 'id'> }) => Promise<T>

  /**
   * Updates an existing record of type `T` with the provided `data` in `args, using the `id` in `args` to identify the record to update. Returns a promise that resolves to the updated record.
   * @param args.where.id - The ID of the record to update.
   * @param args.data - The updated data for the record.
   */
  update: (args: { where: { id: string }; data: Omit<T, 'id'> }) => Promise<T>

  /**
   * Deletes a record of type `T` with the provided `id` in `args`. Returns a promise that resolves when the deletion is complete.
   * @param args.where.id - The ID of the record to delete.
   */
  delete: (args: { where: { id: string } }) => Promise<void>
}
