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
    return res.status(405).end(`Método ${req.method} no permitido`)
  }

  const { page = 1, pageSize = 10 } = req.query

  try {
    const offset = (parseInt(page as string) - 1) * parseInt(pageSize as string)
    const limit = parseInt(pageSize as string)

    const record = await dataService.getAll(model, {
      skip: offset,
      take: limit,
    })
    if (record.length === 0) {
      return res.status(404).json({ message: messageCRUD.error.notResource })
    }

    const data = {
      message: messageCRUD.success.read,
      total: record.length,
      page: parseInt(page as string),
      data: record,
    }
    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json({ error: messageCRUD.error.read })
  }
}
