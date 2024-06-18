import { NextApiResponse } from 'next'

import detail from '@/libs/services/handler/detail'
import update from '@/libs/services/handler/update'
import destroy from '@/libs/services/handler/delete'
import { messageCRUD } from '@/libs/message'
import { RequestProps } from '@/types/RequestProps'
import { ModelName } from "@/types/prismaDelegate"

const model: ModelName = 'user'

export default async function handler(req: RequestProps, res: NextApiResponse) {
  const {
    query: { id },
    method,
    body,
  } = req 

  switch (method) {
    case 'GET':
      try {
        if (id) {
          await detail(req, res, model)
        }
      } catch (error) {
        res.status(500).json({ error: messageCRUD.error.id.invalid })
      }
      break
    case 'PATCH':
      try {
        if (!body) {
          res.status(400).json({ error: messageCRUD.error.body })
        }
        await update(req, res, model)
      } catch (error) {
        res.status(500).json({ error: messageCRUD.error })
      }
      break
    case 'DELETE':
      try {
        if (!id) {
          res.status(400).json({ error: messageCRUD.error.id.missing })
        }
        await destroy(req, res, model)
      } catch (error) {
        res.status(500).json({ error: messageCRUD.error.delete })
      }
      break
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
      res.status(405).end(`Método ${method} no permitido`)
      break
  }
}
