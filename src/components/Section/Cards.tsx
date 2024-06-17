import CardItem from './CardItem'
import ServiceItem from '@/components/Section/ServiceItem'
//Props data recibe un array de objetos

interface Props {
  data: any
  service: boolean
}

const Cards: React.FC<Props> = ({ data, service = false }) => {
  const serviceCards = (
    <div className="flex justify-center items-center w-full h-64 gap-4 rounded-2xl">
      {data?.map((card: any, index: number) => (
        <ServiceItem
          key={index}
          title={card.title}
          description={card.description}
          bgColor={card.bgColor || 'bg-white'}
        />
      ))}
    </div>
  )
  const cards = (
    <div className="flex justify-center items-center w-full h-64 gap-4 rounded-2xl">
      {data?.map((card: any, index: number) => (
        <CardItem
          key={index}
          title={card.title}
          description={card.description}
          bgColor={card.bgColor || 'bg-white'}
          borderColor={card.borderColor || ' '}
        />
      ))}
    </div>
  )
  return service ? serviceCards : cards
}

export default Cards
