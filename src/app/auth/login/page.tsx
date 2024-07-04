/* eslint-disable @typescript-eslint/no-misused-promises */
"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { GoArrowLeft } from 'react-icons/go'
import { useForm, SubmitHandler } from 'react-hook-form'
import { signIn } from 'next-auth/react'

import { Brand } from '@/components/Button/Brand'
import { Button } from '@/components/Button/Button'
import SimpleHeader from '@/components/Title/SimpleHeader'
import ButtonCircle from '@/components/Button/ButtonCircle'

interface FormData {
  email: string
  password: string
}

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const router = useRouter()

  const onSubmit: SubmitHandler<FormData> = async data => {
    console.log(data)
    const res = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false
    })
 console.log(res)
    if (res && res.error) { 
      alert(res.error)
    } else {
       router.push('/')
    }


  }

  return (
    <div className="w-full h-full flex flex-col items-center py-10 px-28 gap-4 bg-slate-100">
      <Brand />
      <div className="w-full h-full flex overflow-hidden rounded-2xl shadow">
        <div className="w-1/2 h-full bg-black relative flex justify-start items-center">
          <img
            src="https://res.cloudinary.com/dcekvcyvf/image/upload/v1719424243/ztjp3gxfl24bz6ynd1ub.svg"
            alt="login"
            className="absolute z-0 w-full h-full object-cover top-0"
          />
          <ButtonCircle
            href="/"
            icon={<GoArrowLeft />}
            className="z-10 left-4 w-fit"
          />
        </div>
        <div className="bg-white h-full justify-center p-8 mb-4 flex flex-col w-1/2">
          <SimpleHeader title="Iniciar sesión" />
          <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="#email"
              >
                Correo electronico <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="jhon-doe@wepago.com"
                {...register('email', { required: 'Este campo es requerido' })}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="mb-6">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="#password"
              >
                Contraseña <span className="text-red-500">*</span>
              </label>
              <input
                id="password"
                type="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="******"
                {...register('password', {
                  required: 'Este campo es requerido',
                })}
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
            <div className="flex items-center justify-between">
              <Button type="submit" forms title="Acceder" />
              <Link
                className="inline-block align-baseline text-sm text-blue hover:text-blue-800"
                href="/auth/reset_password"
              >
                ¿Has olvidado tu contraseña?
              </Link>
            </div>
          </form>
          <h3 className="text-base my-4">
            ¿No está registrado?{' '}
            <Link
              href="/auth/register"
              className="text-base text-blue-500 hover:text-blue-800"
            >
              {' '}
              Crear una cuenta
            </Link>
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Login
