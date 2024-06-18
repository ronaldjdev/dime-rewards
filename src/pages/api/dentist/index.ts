import { NextApiRequest, NextApiResponse } from 'next'
import { Dentist } from '@prisma/client'

import create from '@/libs/services/handler/create'
import list from '@/libs/services/handler/read'
import { messageCRUD } from '@/libs/message'
import prisma from '@/libs/prisma'

const model = prisma.dentist
/**
 * Handles API requests for the dentist endpoint.
 *
 * @param {NextApiRequest} req - The request object.
 * @param {NextApiResponse} res - The response object.
 * @return {Promise<void>} A promise that resolves when the request is handled.
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method, body } = req as { method: string; body: Partial<Dentist> }

  switch (method) {
    case 'POST':
      if (!body) {
        res.status(400).json({ error: messageCRUD.error.body })
      }
      await create(req, res, model)
      break

    case 'GET':
      await list(req, res, model)
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Método ${method} no permitido`)
      break
  }
}
