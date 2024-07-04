import NextAuth from 'next-auth'
import CredentialsProviders from 'next-auth/providers/credentials'
import { compare } from 'bcrypt' // Asegúrate de tener bcryptjs instalado y configurado

import prisma from '@/libs/db'

const authOptions = {
  providers: [
    CredentialsProviders({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Correo Electrónico',
          type: 'text',
          placeholder: 'jhon-doe@dime.com',
        },
        password: { label: 'Contraseña', type: 'password' },
      },
      async authorize(credentials, _req) {
        if (!credentials)
          throw new Error(
            JSON.stringify({
              message: 'Credenciales incorrectas',
              status: false,
            }),
          )

        const { email, password } = credentials

        const userFound = await prisma.user.findUnique({
          where: { email },
        })

        if (!userFound)
          throw new Error(
            JSON.stringify({
              message: 'Usuario no funciona',
              status: false,
            }),
          )

        const isValidPassword = await compare(password, userFound.password)

        if (!isValidPassword)
          throw new Error(
            JSON.stringify({
              message: 'Contraseña no funciona',
              status: false,
            }),
          )
        console.log(userFound)
        // Si todo es correcto, retorna el usuario
        return userFound
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || 'some-generated-secret',
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
