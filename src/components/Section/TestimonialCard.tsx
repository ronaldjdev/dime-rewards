interface TestimonialCardProps {
  image: string
  name: string
  text: string
  profession: string
  bgColor: string
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  image,
  name,
  text,
  bgColor,
  profession,
}) => {
  return (
    <div
      className={`h-64 w-full justify-between flex flex-col p-10 ${bgColor} rounded-2xl`}
    >
      <div className="flex items-center gap-4 mb-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full" />
        <div className="flex flex-col">
          <h3 className="text-md font-medium">{name}</h3>
          <h3 className="text-sm ">{profession}</h3>
        </div>
      </div>
      <p className="text-sm">{text}</p>
    </div>
  )
}

export default TestimonialCard
