import { NextApiRequest, NextApiResponse } from 'next'
import { dataService } from '@/libs/services/dataService'
import { messageCRUD } from '@/libs/message'

/**
 * Handles the PATCH request to update a record in the database.
 *
 * @param {NextApiRequest} req - The request object containing the HTTP request.
 * @param {NextApiResponse} res - The response object used to send the HTTP response.
 * @param {any} model - The model used to interact with the database.
 * @return {Promise<void>} A promise that resolves when the update is successful or rejects with an error.
 */

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
  model: any,
) {
  if (req.method !== 'PATCH') {
    res.setHeader('Allow', ['PATCH'])
    return res.status(405).end(`Metodo ${req.method} no permitido`)
  }
  try {
    const { id }: any = req.query
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
