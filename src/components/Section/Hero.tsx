import { Button } from '../Button/Button'
// import { SubscribeForm } from "../SubscribeForm"
const Hero = () => {
  return (
    <div className="flex justify-center items-center gap-1 bg-sky-100 w-full min-h-[700px] p-10 rounded-2xl font-grey-500">
      <div className="flex flex-col w-1/2 h-full justify-center items-start gap-4">
        <h1 className="first-letter:uppercase text-md m-2">
          Disfruta de increíbles beneficios y recompensas
        </h1>
        <h1 className="capitalize text-9xl font-semibold p-none m-none">
          dime
          <br />
          rewards
        </h1>
        <Button title="Empezar" color="black" />
      </div>
      <div className="w-1/2 flex h-full justify-center items-center">
        <img className="w-96 h-96" src="./logo_dime_rewards.png" alt="logo" />
      </div>
    </div>
  )
}

export default Hero
