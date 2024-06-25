import { NextApiRequest, NextApiResponse } from 'next'

import { dataService } from '@/libs/services/dataService'
import { messageCRUD } from '@/libs/message'
import ModelName from '@/types/modelName'
import ModelTypes from '@/types/modelTypes'

import isModelName from '../isModelName'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
  model: ModelName,
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end(`Metodo ${req.method} no permitido`)
  }
  if (!isModelName(model)) {
    return res
      .status(400)
      .json({ error: `Modelo ${String(model)} no encontrado` })
  }

  try {
    const reqData = req.body as ModelTypes[keyof ModelTypes]
    const createdRecord = await dataService.create(model, { ...reqData })
    const data = {
      message: messageCRUD.success.create,
      data: createdRecord,
    }
    return res.status(201).json(data)
  } catch (error) {
    console.error('error: ', error)
    return res.status(500).json({ error: messageCRUD.error.create })
  }
}
