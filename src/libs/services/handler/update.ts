import { NextApiResponse } from 'next'

import { dataService } from '@/libs/services/dataService'
import { messageCRUD } from '@/libs/message'
import { RequestProps } from '@/types/RequestProps'
import { ModelName } from '@/types/modelName'

export default async function handler(
  req: RequestProps,
  res: NextApiResponse,
  model: ModelName,
) {
  if (req.method !== 'PATCH') {
    res.setHeader('Allow', ['PATCH'])
    return res.status(405).end(`Metodo ${req.method} no permitido`)
  }
  try {
    const { id } = req.query
    const reqData = req.body

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
