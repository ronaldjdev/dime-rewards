import { NextApiRequest, NextApiResponse } from 'next'

import { dataService } from '@/libs/services/dataService'
import { messageCRUD } from '@/libs/message'
import ModelName from '@/types/modelName'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
  model: ModelName,
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    return res.status(405).end(`Metodo ${req.method} no permitido`)
  }
  try {
    const { id } = req.query

    if (typeof id !== 'string') {
      return res.status(400).json({ error: messageCRUD.error.id.missing })
    }

    const record = await dataService.getById(model, id)

    if (!record) {
      return res.status(404).json({ error: messageCRUD.error.read })
    }
    const data = {
      message: messageCRUD.success.read,
      data: record,
    }
    return res.status(201).json(data)
  } catch (error) {
    return res.status(500).json({ error: messageCRUD.error.read })
  }
}
