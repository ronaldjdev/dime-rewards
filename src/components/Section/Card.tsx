import CardItem from './CardItem'

const Card: React.FC = () => {
  const cardData = [
    {
      title: 'Descuentos exclusivos',
      description:
        'Canjea tus puntos por descuentos exclusivos en una amplia gama de insumos dentales, asegurándote siempre el mejor valor.',
      borderColor: 'border border-black',
    },
    {
      title: 'Acceso a productos',
      description:
        'Utiliza tus puntos para obtener acceso prioritario a los últimos productos y tecnologías dentales.',
      bgColor: 'bg-sky-100',
    },
    {
      title: 'Reconocimiento a tu preferencia',
      description:
        'Reconocemos y valoramos tu preferencia. A medida que continúas eligiendo DIME, te recompensamos con beneficios adicionales y experiencias personalizadas.',
      bgColor: 'bg-indigo-200',
    },
  ]

  return (
    <div className="flex justify-center items-center w-full h-64 gap-4 rounded-2xl">
      {cardData.map((card, index) => (
        <CardItem
          key={index}
          title={card.title}
          description={card.description}
          bgColor={card.bgColor}
          borderColor={card.borderColor}
        />
      ))}
    </div>
  )
}

export default Card
