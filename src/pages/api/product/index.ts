import { NextApiRequest, NextApiResponse } from 'next'
import create from '@/libs/services/handler/create'
import list from '@/libs/services/handler/read'
import { messageCRUD } from '@/libs/message'
import prisma from "@/libs/prisma"

/**
 * Handles API requests for the dentist endpoint.
 *
 * @param {NextApiRequest} req - The request object.
 * @param {NextApiResponse} res - The response object.
 * @return {Promise<void>} A promise that resolves when the request is handled.
 */
let model = prisma.dentist
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req

  switch (method) {
    case 'POST':
      if (!body) {
        res.status(400).json({ error: messageCRUD.error.body })
        return
      }
      return create(req, res, model)
    case 'GET':
      return list(req, res, model)
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Método ${method} no permitido`)
  }
}
