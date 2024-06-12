import { NextApiRequest, NextApiResponse } from 'next'
import { dataService } from '@/libs/services/dataService'
import { messageCRUD } from '@/libs/message'
import { PrismaClient } from '@prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    return res.status(405).end(`Metodo ${req.method} no permitido`)
  }
  try {
    const prisma = new PrismaClient()
    const users = await dataService.getAll(prisma.user)
    if (users.length === 0) {
      return res.status(404).json({ error: messageCRUD.error.read })
    }
    const data = {
      message: messageCRUD.success.read,
      data: users,
    }
    return res.status(201).json(data)
  } catch (error) {
    return res.status(500).json({ error: messageCRUD.error.read })
  }
}
