import { NextApiResponse } from 'next'

import { PrismaDelegate } from '@/types/prismaDelegate'
import { dataService } from '@/libs/services/dataService'
import { messageCRUD } from '@/libs/message'
import { RequestProps } from '@/types/RequestProps'

/**
 * Handles the POST request for creating a resource.
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
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end(`Metodo ${req.method} no permitido`)
  }
  try {
    const reqData = req.body
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
