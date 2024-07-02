/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import Link from 'next/link'
import {useRouter} from 'next/navigation'
import { useForm, SubmitHandler } from 'react-hook-form'
import { GoArrowLeft } from 'react-icons/go'

import ButtonCircle from '@/components/Button/ButtonCircle'
import Button from '@/components/Button/Button'
import SimpleHeader from '@/components/Title/SimpleHeader'

interface FormData {
  name: string
  last_name: string
  email: string
  password: string
  confirmPassword: string
}

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>()

  const router = useRouter()
  
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...formData } = data
    const res = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-type': 'application/json'
      }
    })
    if (res.ok){
      router.push('/auth/login')
    }

  }

  const password = watch('password')

  return (
    <div className="w-full h-full flex flex-col items-center py-10 px-28 gap-4 bg-slate-100">
      <div className="w-full h-full flex overflow-hidden rounded-2xl shadow">
        <div className="w-1/2 h-full bg-ambar-200 relative flex justify-start items-center">
          <img
            src="https://res.cloudinary.com/dcekvcyvf/image/upload/v1719424243/ztjp3gxfl24bz6ynd1ub.svg"
            alt="login"
            className="absolute z-0 w-full h-full object-cover top-0"
          />
          <ButtonCircle
            href="/auth/login"
            icon={<GoArrowLeft />}
            className="z-10 left-4 w-fit"
          />
        </div>
        <div className="bg-white h-full justify-center p-8 mb-4 flex flex-col w-1/2">
          <SimpleHeader title="Crear cuenta" />
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 mb-6 md:grid-cols-2">
              <div className="flex flex-col">
                <label
                  className="block text-grey-darker text-sm font-bold mb-2"
                  htmlFor="#name"
                >
                  Nombre <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  {...register('name', { required: 'Este campo es requerido' })}
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  className="block text-grey-darker text-sm font-bold mb-2"
                  htmlFor="#last_name"
                >
                  Apellido <span className="text-red-500">*</span>
                </label>
                <input
                  id="last_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Doe"
                  {...register('last_name', {
                    required: 'Este campo es requerido',
                  })}
                />
                {errors.last_name && (
                  <p className="text-red-500">{errors.last_name.message}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col mb-6">
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
            <div className="flex flex-col mb-6">
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
            <div className="flex flex-col mb-6">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="#confirmPass"
              >
                Confirmar contraseña <span className="text-red-500">*</span>
              </label>
              <input
                id="confirmPass"
                type="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="******"
                {...register('confirmPassword', {
                  required: 'Este campo es requerido',
                  validate: value =>
                    value === password || 'Las contraseñas no coinciden',
                })}
              />
              {errors.confirmPassword && (
                <p className="text-red-500">{errors.confirmPassword.message}</p>
              )}
            </div>
            <div className="flex items-start mb-6">
              <label
                htmlFor="remember"
                className="ms-2 text-sm font-medium text-gray-900 "
              >
                Al registrarte estas aceptando nuestros{' '}
                <Link
                  href="/"
                  passHref
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  Términos y condiciones
                </Link>
                .
              </label>
            </div>
            <Button forms title="Crear cuenta" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
