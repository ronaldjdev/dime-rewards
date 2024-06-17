import { NextApiRequest, NextApiResponse } from 'next'
import { dataService } from '@/libs/services/dataService'
import { messageCRUD } from '@/libs/message'


/**
 * Handles the creation of a record in the database.
 *
 * @param {NextApiRequest} req - The request object.
 * @param {NextApiResponse} res - The response object.
 * @param {any} model - The model to create the record in.
 * @return {Promise<void>} A promise that resolves when the record is created successfully, or rejects with an error.
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
  model: any,
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end(`Metodo ${req.method} no permitido`)
  }
  try {
    const reqData = req.body
    const createdRecord = await dataService.create(model, { ...reqData })
    const data = {
      message: messageCRUD.success.create,
      data: createdRecord,
    }
    return res.status(201).json(data)
  } catch (error) {
    console.error('error: ', error)
    return res.status(500).json({ error: messageCRUD.error.create })
  }
}
