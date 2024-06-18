import { Button } from '@/components/Button'

const PlusService = () => {
  return (
    <div className="flex justify-center items-center gap-1 w-full min-h-[600px] py-5 px-10 rounded-2xl font-grey-500">
      <div className="flex flex-col w-1/2 h-full justify-center items-start gap-4">
        <h1 className="first-letter:uppercase text-5xl font-medium p-none m-none w-96">
          Gana puntos y crea sonrisas sanas.
        </h1>
        <p className="first-letter:uppercase text-md p-none m-none w-96">
          valoramos tu compromiso con la salud dental. Con{' '}
          <span className="font-bold">DIME Rewards</span> , cada compra de
          insumos odontológicos acumula puntos que puedes canjear por descuentos
          exclusivos y servicios gratuitos.
        </p>
        <p className="text-md p-none m-none w-96">
          Únete hoy mismo y transforma tus compras en beneficios para tu clínica
          dental y tus pacientes. ¡Empieza a ganar puntos y crea sonrisas ahora.
        </p>
        <Button color="black" variant="outline" title="empezar" />
      </div>
      <div className="w-1/2 flex h-full justify-center items-center bg-sky-100 rounded-2xl">
        <img className="w-96 h-96" src="./logo_dime_rewards.png" alt="logo" />
      </div>
    </div>
  )
}

export default PlusService
