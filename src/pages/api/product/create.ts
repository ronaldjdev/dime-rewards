import { NextApiRequest, NextApiResponse } from 'next'
import { dataService } from '@/libs/services/dataService'
import { Product } from '@prisma/client'
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
    const dataProduct: Omit<Product, 'id'> = req.body
    const newProduct = await dataService.create(prisma.product, dataProduct)
    const data = {
      message: messageCRUD.success.create,
      data: newProduct,
    }
    return res.status(201).json(data)
  } catch (error) {
    return res.status(500).json({ error: messageCRUD.error.create })
  }
}
