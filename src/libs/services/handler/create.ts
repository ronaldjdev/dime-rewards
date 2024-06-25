import { NextApiResponse } from 'next'
import bcrypt from 'bcrypt'

import { dataService } from '@/libs/services/dataService'
import { messageCRUD } from '@/libs/message'
import { RequestProps } from '@/types/RequestProps'
import { ModelName } from '@/types/modelName'

export default async function handler(
  req: Pick<RequestProps, 'method' | 'body'>,
  res: NextApiResponse,
  model: ModelName,
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end(`Metodo ${req.method} no permitido`)
  }
  try {
    const reqData = req.body

    // Check if password is in the request body and hash it
    if (reqData.password) {
      const saltRounds = 10 // Adjust the salt rounds as needed
      const hashedPassword = await bcrypt.hash(reqData.password, saltRounds)
      reqData.password = hashedPassword
    }

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
