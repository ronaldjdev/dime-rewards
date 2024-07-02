import { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcrypt'


import { dataService } from '@/libs/services/dataService'
import { messageCRUD } from '@/libs/message'
import ModelName from '@/types/modelName'
import ModelTypes from '@/types/modelTypes'

import isModelName from '../isModelName'

// Define campos únicos para cada modelo
const UNIQUE_FIELDS: { [key in ModelName]?: (keyof ModelTypes[key])[] } = {
  user: ['email', 'identification'],
  dentist: ['name', 'specialty'],
  clinic: ['identification', 'name'],
  ticket: ['code'],
  product: ['name'],
  category: ['name'],
  socialMedia: ['url'],
  notification: [],
  badge: ['name'],
  userBadge: [],
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
  model: ModelName,
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end(`Método ${req.method} no permitido`)
  }

  if (!isModelName(model)) {
    return res
      .status(400)
      .json({ error: `Modelo ${String(model)} no encontrado` })
  }

  try {
    const reqData = req.body as ModelTypes[typeof model]
    const uniqueFields = UNIQUE_FIELDS[model]

    if (uniqueFields) {
      // Construir la cláusula OR para la búsqueda de campos únicos
      const whereClause = uniqueFields.map(field => ({
        [field as keyof ModelTypes[typeof model]]:
          reqData[field as keyof ModelTypes[typeof model]],
      }))

      // Verificar si ya existe un registro con los campos únicos
      const existingRecord = await dataService.findFirst(model, {
        where: { OR: whereClause },
      })

      if (existingRecord) {
        return res.status(409).json({
          error: `Uno o más campos únicos ya existen en el modelo ${model}`,
        })
      }
    }

   if (model === 'user' && 'password' in reqData && reqData?.password) {
     let passwordToHash: string

     // Manejar diferentes casos según el tipo de reqData.password
     if (typeof reqData.password === 'string') {
       passwordToHash = reqData.password
     } else if (typeof reqData.password === 'object' && reqData.password.set) {
       // Suponiendo que puedes extraer el valor adecuado de StringFieldUpdateOperationsInput
       passwordToHash = reqData.password.set.toString()
     } else {
       // Manejar cualquier otro caso inesperado o devolver un error según tu lógica
       throw new Error('Formato de password inválido')
     }

     const hashedPassword = await bcrypt.hash(passwordToHash, 10)
     reqData.password = hashedPassword

     // Crear el registro en la base de datos
     const createdRecord = await dataService.create(model, reqData)

     // eslint-disable-next-line @typescript-eslint/no-unused-vars
     const {password:_, ...data} = createdRecord
     return res.status(201).json({
       message: messageCRUD.success.create,
       data,
     })
   }

    
    // Crear el registro en la base de datos
    const createdRecord = await dataService.create(model, reqData)

    return res.status(201).json({
      message: messageCRUD.success.create,
      data: createdRecord,
    })
  } catch (error) {
    console.error('Error:', error)
    return res.status(500).json({ error: messageCRUD.error.create })
  }
}
