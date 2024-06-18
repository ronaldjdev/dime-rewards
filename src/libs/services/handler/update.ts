import { NextApiResponse } from 'next'

import { PrismaDelegate } from '@/types/prismaDelegate'
import { dataService } from '@/libs/services/dataService'
import { messageCRUD } from '@/libs/message'
import { RequestProps } from '@/types/RequestProps'

/**
 * Handles the PATCH request to update a record in the database.
 *
 * @param {RequestProps} req - The request object containing the HTTP method and body.
 * @param {NextApiResponse} res - The response object used to send the HTTP response.
 * @param {PrismaDelegate<unknown>} model - The Prisma model used to interact with the database.
 * @return {Promise<void>} A promise that resolves when the response is sent.
 */
export default async function handler(
  req: RequestProps,
  res: NextApiResponse,
  model: PrismaDelegate<unknown>,
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
