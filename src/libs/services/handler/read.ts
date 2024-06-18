import { NextApiResponse } from 'next'

import { PrismaDelegate } from '@/types/prismaDelegate'
import { dataService } from '@/libs/services/dataService'
import { messageCRUD } from '@/libs/message'
import { RequestProps } from '@/types/RequestProps'


/**
 * Handles the GET request to retrieve a record from the database.
 *
 * @param {Pick<RequestProps, 'method' | 'query'>} req - The request object containing the HTTP method and query parameters.
 * @param {NextApiResponse} res - The response object used to send the HTTP response.
 * @param {PrismaDelegate<unknown>} model - The Prisma model used to interact with the database.
 * @return {Promise<void>} A promise that resolves when the response is sent.
 */
export default async function handler(
  req: Pick<RequestProps, 'method' | 'query'>,
  res: NextApiResponse,
  model: PrismaDelegate<unknown>,
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    return res.status(405).end(`Metodo ${req.method} no permitido`)
  }
  try {
    const { id }= req.query

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
