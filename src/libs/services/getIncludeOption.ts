import ModelName from '@/types/modelName'

const getIncludeOptions = (modelName: ModelName) => {
  switch (modelName) {
    case 'user':
      return {
        socialMedia: true,
        tickets: true,
        dentist: true,
        clinic: true,
        notification: true,
        products: true,
        badges: {
          include: {
            badge: true,
          },
        },
      }
    case 'dentist':
      return {
        user: true,
        clinics: true,
      }
    case 'clinic':
      return {
        creator: true,
        dentist: true,
      }
    case 'ticket':
      return {
        user: true,
      }
    case 'product':
      return {
        creator: true,
        category: true,
      }
    case 'category':
      return {
        products: true,
      }
    case 'socialMedia':
      return {
        user: true,
      }
    case 'notification':
      return {
        user: true,
      }
    case 'badge':
      return {
        users: {
          include: {
            user: true,
          },
        },
      }
    default:
      return {}
  }
}

export default getIncludeOptions
