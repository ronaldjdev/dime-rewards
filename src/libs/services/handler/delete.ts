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
  if (req.method !== 'DELETE') {
    res.setHeader('Allow', ['DELETE'])
    return res.status(405).end(`Metodo ${req.method} no permitido`)
  }

  if (!isModelName(model)) {
    return res
      .status(400)
      .json({ error: `Modelo ${String(model)} no encontrado` })
  }
  try {
    const { id } = req.body as ModelTypes[keyof ModelTypes]

    if (typeof id !== 'string') {
      return res.status(400).json({ error: messageCRUD.error.id.missing })
    }
    await dataService.destroy(model, id)
    return res.status(204).end()
  } catch (error) {
    return res.status(500).json({ error: messageCRUD.error.delete })
  }
}
