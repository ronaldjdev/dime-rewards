import { Button } from '../Button'
// import { SubscribeForm } from "../SubscribeForm"
interface Props {
  primary: any
  secundary: any
}

const Section = ({ primary, secundary }: Partial<Props>) => {
  return (
    <div className="flex justify-center items-center gap-1 bg-sky-100 w-full h-[700px] p-5 rounded-2xl font-grey-500 overflow-hidden">
      <div className="flex flex-col w-1/2 h-full justify-center items-start">
        {primary}
      </div>
      <div className="w-1/2 flex h-full justify-center items-center">
        {secundary}
      </div>
    </div>
  )
}

export default Section
