import { Clinic, User, Dentist, Ticket, Product, Prisma } from '@prisma/client'

/**
 * A delegate for interacting with a Prisma ORM model.
 */
export interface PrismaDelegate<
  T,
  DeleteArgs,
  UpdateArgs,
  DeleteArgs,
  FindUniqueArgs,
  FindManyArgs,
> {
  /**
   * Returns a promise that resolves to an array of all records of type `T`.
   */
  findMany: (args?: FindManyArgs) => Promise<T[]>

  /**
   * Returns a promise that resolves to a single record of type `T` that matches the provided `id` in `args`, or `null` if no match is found.
   * @param args - The arguments for finding a unique record.
   */
  findUnique: (args: FindUniqueArgs) => Promise<T | null>

  /**
   * Creates a new record of type `T` with the provided `data` in `args`, and returns a promise that resolves to the newly created record.
   * @param args - The arguments for creating a new record.
   */
  create: (args: CreateArgs) => Promise<T>

  /**
   * Updates an existing record of type `T` with the provided `data` in `args, using the `id` in `args` to identify the record to update. Returns a promise that resolves to the updated record.
   * @param args - The arguments for updating a record.
   */
  update: (args: UpdateArgs) => Promise<T>

  /**
   * Deletes a record of type `T` with the provided `id` in `args`. Returns a promise that resolves when the deletion is complete.
   * @param args - The arguments for deleting a record.
   */
  delete: (args: DeleteArgs) => Promise<void>
}

export interface ClinicDelegate
  extends PrismaDelegate<
    Clinic,
    Prisma.ClinicCreateArgs,
    Prisma.ClinicUpdateArgs,
    Prisma.ClinicDeleteArgs,
    Prisma.ClinicFindUniqueArgs,
    Prisma.ClinicFindManyArgs
  > {}

export interface UserDelegate
  extends PrismaDelegate<
    User,
    Prisma.UserCreateArgs,
    Prisma.UserUpdateArgs,
    Prisma.UserDeleteArgs,
    Prisma.UserFindUniqueArgs,
    Prisma.UserFindManyArgs
  > {}

export interface DentistDelegate
  extends PrismaDelegate<
    Dentist,
    Prisma.DentistCreateArgs,
    Prisma.DentistUpdateArgs,
    Prisma.DentistDeleteArgs,
    Prisma.DentistFindUniqueArgs,
    Prisma.DentistFindManyArgs
  > {}

export interface TicketDelegate
  extends PrismaDelegate<
    Ticket,
    Prisma.TicketCreateArgs,
    Prisma.TicketUpdateArgs,
    Prisma.TicketDeleteArgs,
    Prisma.TicketFindUniqueArgs,
    Prisma.TicketFindManyArgs
  > {}

export interface ProductDelegate
  extends PrismaDelegate<
    Product,
    Prisma.ProductCreateArgs,
    Prisma.ProductUpdateArgs,
    Prisma.ProductDeleteArgs,
    Prisma.ProductFindUniqueArgs,
    Prisma.ProductFindManyArgs
  > {}
