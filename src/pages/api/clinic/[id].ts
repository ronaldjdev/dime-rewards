import { NextApiRequest, NextApiResponse } from 'next'
import detail from '@/libs/services/handler/detail'
import update from '@/libs/services/handler/update'
import destroy from '@/libs/services/handler/delete'
import prisma from '@/libs/prisma'
import { messageCRUD } from '@/libs/message'

let model = prisma.clinic
/**
 * A function that handles different HTTP methods and routes based on the method type.
 *
 * @param {NextApiRequest} req - The incoming request object
 * @param {NextApiResponse} res - The response object to send back
 * @return {void} This function does not return a value directly, but it handles the HTTP request and response
 */
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    method,
    body,
  } = req

  switch (method) {
    case 'GET':
      try {
        if (id) {
          return detail(req, res, model)
        }
      } catch (error) {
        return res.status(500).json({ error: messageCRUD.error.id.invalid })
      }
    case 'PATCH':
      try {
        if (!body) {
          res.status(400).json({ error: messageCRUD.error.body })
          return
        }
        return update(req, res, model)
      } catch (error) {
        res.status(500).json({ error: messageCRUD.error })
      }
    case 'DELETE':
      try {
        if (!id) {
          res.status(400).json({ error: messageCRUD.error.id.missing })
          return
        }
        return destroy(req, res, model)
      } catch (error) {
        res.status(500).json({ error: messageCRUD.error.delete })
      }
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
      res.status(405).end(`Método ${method} no permitido`)
  }
}
