import ModelTypes from './modelTypes'

export type PaginatedArgs = {
  skip?: number
  take?: number
}

export type IncludeOptions = {
  socialMedia?: boolean
  tickets?: boolean
  dentist?: boolean
  clinic?: boolean
  notification?: boolean
  products?: boolean
  user?: boolean
  clinics?: boolean
  creator?: boolean
  badge?: boolean
  category?: boolean
  userBadge?: boolean
}

type PrismaModel<T extends keyof ModelTypes> = {
  findMany: (args?: {
    skip?: number
    take?: number
    include?: IncludeOptions
  }) => Promise<ModelTypes[T][]>
  findUnique: (args: {
    where: { id: string }
    include?: IncludeOptions
  }) => Promise<ModelTypes[T] | null>
  findFirst: (args?: {
    skip?: number
    include?: IncludeOptions
  }) => Promise<ModelTypes[T] | null>
  create: (
    data: Prisma.InputPrismaClient<T>,
    include?: IncludeOptions,
  ) => Promise<ModelTypes[T]>
  update: (args: {
    where: { id: string }
    data: Prisma.InputPrismaClient<T>
    include?: IncludeOptions
  }) => Promise<ModelTypes[T]>
  delete: (args: { where: { id: string } }) => Promise<void>
}

export default PrismaModel
