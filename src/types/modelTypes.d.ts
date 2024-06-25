import { Prisma } from '@prisma/client'

interface ModelTypes {
  user: Prisma.UserCreateInput | Prisma.UserUpdateInput
  dentist: Prisma.DentistCreateInput | Prisma.DentistUpdateInput
  product: Prisma.ProductCreateInput | Prisma.ProductUpdateInput
  clinic: Prisma.ClinicCreateInput | Prisma.ClinicUpdateInput
  ticket: Prisma.TicketCreateInput | Prisma.TicketUpdateInput
  socialMedia: Prisma.SocialMediaCreateInput | Prisma.SocialMediaUpdateInput
  notification: Prisma.NotificationCreateInput | Prisma.NotificationUpdateInput
}

export default ModelTypes
