import { NextApiResponse } from 'next'

import { dataService } from '@/libs/services/dataService'
import { messageCRUD } from '@/libs/message'
import { RequestProps } from '@/types/RequestProps'
import { ModelName } from '@/types/prismaDelegate'

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
