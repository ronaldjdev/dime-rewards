import { NextApiResponse } from 'next'

import { dataService } from '@/libs/services/dataService'
import { messageCRUD } from '@/libs/message'
import { RequestProps } from '@/types/RequestProps'
import { ClinicDelegate, UserDelegate, DentistDelegate, TicketDelegate, ProductDelegate } from '@/types/prismaDelegate'


export default async function handler(
  req: Pick<RequestProps, 'method' | 'query'>,
  res: NextApiResponse,
  model: ClinicDelegate | UserDelegate | DentistDelegate | TicketDelegate | ProductDelegate,
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    return res.status(405).end(`Metodo ${req.method} no permitido`)
  }
  try {
    const { id } = req.query

    const record = await dataService.getById(model, id)

    if (!record) {
      return res.status(404).json({ error: messageCRUD.error.read })
    }
    const data = {
      message: messageCRUD.success.read,
      data: record,
    }
    return res.status(201).json(data)
  } catch (error) {
    return res.status(500).json({ error: messageCRUD.error.read })
  }
}
