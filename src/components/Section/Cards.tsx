import ServiceItem from '@/components/Section/ServiceItem'

import CardItem from './CardItem'
//Props data recibe un array de objetos
interface CardDataItem {
  title: string;
  description: string;
  borderColor?: string; // Opcional, ya que no todos los objetos tienen esta propiedad
  bgColor?: string;     // Opcional, ya que no todos los objetos tienen esta propiedad
}
interface Props {
  data: CardDataItem[]
  service?: boolean
}

const Cards: React.FC<Props> = ({ data, service = false }) => {
  const serviceCards = (
    <div className="flex justify-center items-center w-full h-64 gap-4 rounded-2xl">
      {data?.map((card: CardDataItem, index: number) => (
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
      {data?.map((card: CardDataItem, index: number) => (
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
