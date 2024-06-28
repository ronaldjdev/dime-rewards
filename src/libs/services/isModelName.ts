import ModelName from '@/types/modelName'

const isModelName = (modelName: unknown): modelName is ModelName => {
  return (
    typeof modelName === 'string' &&
    [
      'user',
      'dentist',
      'product',
      'clinic',
      'ticket',
      'socialMedia',
      'notification',
      'badge',
      'category',
      'userBadge'
    ].includes(modelName)
  )
}

export default isModelName
