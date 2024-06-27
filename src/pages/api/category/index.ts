import { NextApiRequest, NextApiResponse } from 'next'

import create from '@/libs/services/handler/create'
import list from '@/libs/services/handler/read'
import ModelName from '@/types/modelName'
import ModelTypes from '@/types/modelTypes'
import { messageCRUD } from '@/libs/message'

const model: ModelName = 'category'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  const body = req.body as ModelTypes[keyof ModelTypes]
  switch (method) {
    case 'POST':
      if (!body) {
        res.status(400).json({ error: messageCRUD.error.body })
        return
      }
      return create(req, res, model)
    case 'GET':
      return list(req, res, model)
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Método ${method} no permitido`)
  }
}
