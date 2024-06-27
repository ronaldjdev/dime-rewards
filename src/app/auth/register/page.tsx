import Link from 'next/link'

import Input from '@/components/Input'
import Button from '@/components/Button/Button'

const Register = () => {
  return (
    <div className="w-full h-full flex flex-col items-center py-10 px-28 gap-4 bg-sky-950">
      <div className="w-full h-full flex overflow-hidden items-center justify-center rounded-2xl">
        <form>
          <div className="grid gap-4 mb-6 md:grid-cols-2">
            <div>
              <Input
                label="Nombre"
                type="text"
                name="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              />
            </div>
            <div>
              <Input
                label="Apellido"
                type="text"
                name="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Doe"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <Input
              label="Correo electronico"
              type="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="jhon-doe@wepago.com"
              required
            />
          </div>
          <div className="mb-6">
            <Input
              label="Contraseña"
              type="password"
              name="password_1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="******"
              required
            />
          </div>
          <div className="mb-6">
            <Input
              label="Confirmar Contraseña"
              type="password"
              name="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="******"
              required
            />
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <label
              htmlFor="remember"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Estoy de acuerdo con los{' '}
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
          <Button title="Crear cuenta" type="submit" />
        </form>
      </div>
    </div>
  )
}

export default Register
