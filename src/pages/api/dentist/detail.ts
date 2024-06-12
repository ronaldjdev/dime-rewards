import { NextApiRequest, NextApiResponse } from 'next'
import { dataService } from '@/libs/services/dataService'
import { messageCRUD } from '@/libs/message'
import { Dentist, PrismaClient } from '@prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    return res.status(405).end(`Metodo ${req.method} no permitido`)
  }
  try {
    const { id }: any = req.query
    const prisma = new PrismaClient()
    const dentist = await dataService.getById(prisma.dentist, id)

    if (!dentist) {
      return res.status(404).json({ error: messageCRUD.error.read })
    }
    const data = {
      message: messageCRUD.success.read,
      data: dentist,
    }
    return res.status(201).json(data)
  } catch (error) {
    return res.status(500).json({ error: messageCRUD.error.read })
  }
}
