import { NextApiRequest, NextApiResponse } from 'next'

import { dataService } from '@/libs/services/dataService'
import { messageCRUD } from '@/libs/message'

/**
 * Handles a GET request to retrieve a record from the specified model.
 *
 * @param {NextApiRequest} req - The incoming request object.
 * @param {NextApiResponse} res - The outgoing response object.
 * @param {any} model - The model to retrieve the record from.
 * @return {Promise<void>} A promise that resolves when the response is sent.
 *                          If the request method is not GET, returns a 405 status code.
 *                          If the record is not found, returns a 404 status code.
 *                          If an error occurs, returns a 500 status code.
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
