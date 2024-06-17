import { NextApiRequest, NextApiResponse } from 'next'
import update from './update'
import destroy from './delete'
import detail from './detail'
import { messageCRUD} from "@/libs/message"

/**
 * Handles API requests for a specific resource identified by an ID.
 *
 * @param {NextApiRequest} req - The request object.
 * @param {NextApiResponse} res - The response object.
 * @param {any} model - The model used to handle the request.
 * @return {Promise<void>} - A promise that resolves when the request is handled.
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
  model: any,
) {
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
          res
            .status(400)
            .json({ error: messageCRUD.error.body })
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
