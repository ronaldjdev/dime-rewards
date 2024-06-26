import { Button } from '../Button/Button'
// import { SubscribeForm } from "../SubscribeForm"
const Hero = () => {
  return (
    <div className="flex justify-center items-center gap-1 bg-lime-100 w-full min-h-[700px] p-10 rounded-2xl font-grey-500">
      <div className="flex flex-col w-1/2 h-full justify-center items-start gap-4">
        <h2 className="first-letter:uppercase text-md m-2">
          Disfruta de increíbles beneficios y recompensas
        </h2>
        <h1 className="capitalize text-6xl font-semibold p-none m-none">
          Bolsa esterilizacion
          <br />
          Basico
        </h1>
        <Button title="Ver detalle" color="black" />
      </div>
      <div className="w-1/2 flex h-full justify-center items-center">
        <img className="w-96 h-96" src="./logo_dime_rewards.png" alt="logo" />
      </div>
    </div>
  )
}

export default Hero
