import { GoArrowUpRight } from 'react-icons/go'

import ButtonCircle from "@/components/Button/ButtonCircle"

interface CardItemProps {
  title: string
  description: string
  bgColor?: string
  href?: string
}


const ServiceItem: React.FC<CardItemProps> = ({
  title,
  description,
  bgColor = '',
  href = "/"
}) => {
  return (
    <div
      className={`flex flex-col w-96 h-full justify-between items-start p-10 ${bgColor} rounded-2xl relative`}
    >
      <ButtonCircle href={href} icon={<GoArrowUpRight size={'25'} />} />
      <div className="flex w-60 justify-between items-center">
        <h1 className="first-letter:uppercase text-2xl font-medium p-none m-none">
          {title}
        </h1>
      </div>
      <p className="text-sm p-none m-none">{description}</p>
    </div>
  )
}

export default ServiceItem
