interface CardItemProps {
  title: string
  description: string
  bgColor?: string
  borderColor?: string
}

const CardItem: React.FC<CardItemProps> = ({
  title,
  description,
  bgColor = '',
  borderColor = '',
}) => {
  return (
    <div
      className={`flex flex-col h-full justify-between items-start p-10 ${bgColor} ${borderColor} rounded-2xl`}
    >
      <h1 className="first-letter:uppercase text-2xl font-medium p-none m-none">
        {title}
      </h1>
      <p className="text-sm p-none m-none">{description}</p>
    </div>
  )
}

export default CardItem
