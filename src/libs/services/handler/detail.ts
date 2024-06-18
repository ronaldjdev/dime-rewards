import { NextApiRequest, NextApiResponse } from 'next'

import { dataService } from '@/libs/services/dataService'
import { messageCRUD } from '@/libs/message'

/**
 * Asynchronous function that handles GET requests for a specific model.
 *
 * @param {NextApiRequest} req - The incoming request object.
 * @param {NextApiResponse} res - The response object to send back.
 * @param {any} model - The model to retrieve data from.
 * @return {Promise<void>} A Promise that resolves with the fetched data or an error response.
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
  model: any,
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    return res.status(405).end(`Metodo ${req.method} no permitido`)
  }
  try {
    const { id }: any = req.query

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
