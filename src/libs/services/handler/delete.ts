import { NextApiResponse } from 'next'

import { PrismaDelegate } from '@/types/prismaDelegate'
import { dataService } from '@/libs/services/dataService'
import { messageCRUD } from '@/libs/message'
import { RequestProps } from '@/types/RequestProps'

/**
 * Handles the DELETE request for deleting a resource.
 *
 * @param {Pick<RequestProps, 'method' | 'body'>} req - The request object containing the method and body.
 * @param {NextApiResponse} res - The response object.
 * @param {PrismaDelegate<unknown>} model - The PrismaDelegate representing the model for the resource.
 * @return {Promise<void>} - Returns a promise that resolves to void.
 */
export default async function handler(
  req: Pick<RequestProps, 'method' | 'body'>,
  res: NextApiResponse,
  model: PrismaDelegate<unknown>,
) {
  if (req.method !== 'DELETE') {
    res.setHeader('Allow', ['DELETE'])
    return res.status(405).end(`Metodo ${req.method} no permitido`)
  }
  try {
    const { id } = req.body
    if (id) {
      await dataService.destroy(model, id)
      return res.status(204).end()
    }
  } catch (error) {
    return res.status(500).json({ error: messageCRUD.error.delete })
  }
}
