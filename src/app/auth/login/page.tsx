import Link from 'next/link'
import { GoArrowLeft } from 'react-icons/go'

import { Brand } from '@/components/Button/Brand'
import { Button } from '@/components/Button/Button'
import SimpleHeader from '@/components/Title/SimpleHeader'
import Input from '@/components/Input'
import ButtonCircle from '@/components/Button/ButtonCircle'

const Login: React.FC = () => {
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
          <form action="" method="post">
            <div className="mb-4">
              <Input
                label="Correo Electronico"
                name="email"
                placeholder="Ingrese su correo electronico..."
              />
            </div>
            <div className="mb-6">
              <Input
                label="Contraseña"
                name="password"
                type="password"
                placeholder="*********"
              />
            </div>
            <div className="flex items-center justify-between">
              <Button type="submit" href="/" title="Acceder" />
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
