import { NextApiResponse } from 'next'

import { dataService } from '@/libs/services/dataService'
import { messageCRUD } from '@/libs/message'
import { RequestProps } from '@/types/RequestProps'
import {
  ClinicDelegate,
  UserDelegate,
  DentistDelegate,
  TicketDelegate,
  ProductDelegate,
} from '@/types/prismaDelegate'


export default async function handler(
  req: Pick<RequestProps, 'method' | 'body'>,
  res: NextApiResponse,
  model: ClinicDelegate | UserDelegate | DentistDelegate | TicketDelegate | ProductDelegate,
) {
  if (req.method !== 'DELETE') {
    res.setHeader('Allow', ['DELETE'])
    return res.status(405).end(`Metodo ${req.method} no permitido`)
  }
  try {
    const { id } = req.body
    if (id) {
      await dataService.destroy(model, id)
      return res.status(204).end()
    }
  } catch (error) {
    return res.status(500).json({ error: messageCRUD.error.delete })
  }
}
