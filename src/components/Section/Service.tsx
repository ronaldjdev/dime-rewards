import Section from './Section'
import { Button } from '@/components/Button'
const Service = () => {

  return (
    <div className="flex justify-center items-center gap-1 w-full min-h-[600px] p-5 rounded-2xl font-grey-500">
      <div className="flex flex-col w-1/2 h-full justify-center items-start gap-4">
        <h1 className="capitalize text-5xl font-medium p-none m-none w-96">
          Gana puntos y crea sonrisas sanas con Dime Rewards.
        </h1>
        <p className="text-md p-none m-none w-96">
          En DIME, valoramos tu compromiso con la salud dental. Con Dime Rewards,
          cada compra acumula puntos que puedes canjear por descuentos o servicios
          dentales gratuitos. Además, cada punto ganado contribuye a mejorar la
          salud bucal comunitaria. <br /> Únete hoy mismo y convierte tus compras en
          sonrisas saludables.
        </p>
        <p className="text-md p-none m-none w-96">
          Únete hoy mismo y convierte tus compras en sonrisas saludables.
        </p>
        <Button color="black" variant="outline" title="empezar" />
      </div>
      <div className="w-1/2 flex h-full justify-center items-center bg-sky-100 rounded-lg">
        <img className="w-96 h-96" src="./logo_dime_rewards.png" alt="logo" />
      </div>
    </div>
  )
}

export default Service
