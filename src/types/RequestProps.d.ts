import { Clinic, Product, Dentist, User, Ticket } from '@prisma/client'
import { NextApiRequest } from 'next'

/**
 * An interface that extends the `NextApiRequest` class to add additional properties.
 *
 * @interface RequestProps
 * @extends NextApiRequest
 * @property {Object} query - An object with an `id` property of type `string`, representing the query parameters of an API request.
 * @property {string} method - A string representing the HTTP method of the API request.
 * @property {Partial<Clinic | Product | Dentist | User | Ticket>} body - An object representing the body of the API request, which can hold partial data of any of the `Clinic`, `Product`, `Dentist`, `User`, or `Ticket` types.
 */
export interface RequestProps extends NextApiRequest {
  query: { id: string }
  method: string
  body: Partial<Clinic | Product | Dentist | User | Ticket>
}
