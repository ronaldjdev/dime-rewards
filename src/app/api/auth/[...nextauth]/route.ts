import { NextApiHandler } from 'next'
import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProviders from 'next-auth/providers/credentials'
import { compare } from 'bcrypt' // Asegúrate de tener bcryptjs instalado y configurado

import prisma from '@/libs/db'

const authOptions: NextAuthOptions = {
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
        if (!credentials) throw new Error('Credenciales incorrectas')

        const { email, password } = credentials

        const userFound = await prisma.user.findUnique({
          where: { email },
        })

        if (!userFound) throw new Error('Usuario no funciona')

        const isValidPassword = await compare(password, userFound.password)

        if (!isValidPassword) throw new Error('Contraseña no funciona')
        console.log(userFound)
        // Si todo es correcto, retorna el usuario
        return userFound
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
  },

  secret: process.env.NEXTAUTH_SECRET,
}

const handler: NextApiHandler = (req, res) => NextAuth(req, res, authOptions)

export { handler as GET, handler as POST }
