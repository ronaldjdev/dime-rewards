import { NextApiResponse } from 'next'

import create from '@/libs/services/handler/create'
import list from '@/libs/services/handler/read'
import { messageCRUD } from '@/libs/message'
import prisma from '@/libs/prisma'
import { RequestProps } from '@/types/RequestProps'
import { TicketDelegate } from '@/types/prismaDelegate'

const model: TicketDelegate = prisma.ticket

export default async function handler(req: RequestProps, res: NextApiResponse) {
  const { method, body } = req 

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
