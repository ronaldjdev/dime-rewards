import { Button } from '../Button'
// import { SubscribeForm } from "../SubscribeForm"
const Hero = () => {
  return (
    <div className="flex justify-center items-center gap-1 bg-sky-100 w-full min-h-[700px] p-5 rounded-2xl font-grey-500">
      <div className="flex flex-col w-1/2 h-full justify-center items-start">
        <h1 className="capitalize text-xl ml-2">dime rewards</h1>
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
