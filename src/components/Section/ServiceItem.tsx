import { GoArrowUpRight } from 'react-icons/go'

interface CardItemProps {
  title: string
  description: string
  bgColor?: string
}

const ServiceItem: React.FC<CardItemProps> = ({
  title,
  description,
  bgColor = '',
}) => {
  return (
    <div
      className={`flex flex-col w-96 h-full justify-between items-start p-10 ${bgColor} rounded-2xl relative`}
    >
      <button className="absolute top-5 right-10 bg-black flex items-center justify-center rounded-full text-white p-4 ">
        <GoArrowUpRight size={'25'} />
      </button>
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
