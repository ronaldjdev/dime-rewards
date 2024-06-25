import { NextApiRequest, NextApiResponse } from 'next'

import { dataService } from '@/libs/services/dataService'
import { messageCRUD } from '@/libs/message'
import ModelName from '@/types/modelName'
import ModelTypes from '@/types/modelTypes'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
  model: ModelName,
) {
  if (req.method !== 'PATCH') {
    res.setHeader('Allow', ['PATCH'])
    return res.status(405).end(`Metodo ${req.method} no permitido`)
  }
  try {
    const { id } = req.query
    if (typeof id !== 'string') {
      return res.status(400).json({ error: messageCRUD.error.id.missing })
    }
    const reqData = req.body as ModelTypes[keyof ModelTypes]

    const record = await dataService.update(model, id, reqData)
    const data = {
      message: messageCRUD.success.read,
      data: record,
    }
    return res.status(201).json(data)
  } catch (error) {
    return res.status(500).json({ error: messageCRUD.error.read })
  }
}
