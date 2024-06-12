import { NextApiRequest, NextApiResponse } from 'next'
import { dataService } from '@/libs/services/dataService'
import { Ticket } from '@prisma/client'
import { messageCRUD } from '@/libs/message'
import { PrismaClient } from '@prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end(`Metodo ${req.method} no permitido`)
  }
  const prisma = new PrismaClient()
  try {
    const dataTicket: Omit<Ticket, 'id'> = req.body
    const newTicket = await dataService.create(prisma.ticket, dataTicket)
    const data = {
      message: messageCRUD.success.create,
      data: newTicket,
    }
    return res.status(201).json(data)
  } catch (error) {
    return res.status(500).json({ error: messageCRUD.error.create })
  }
}
