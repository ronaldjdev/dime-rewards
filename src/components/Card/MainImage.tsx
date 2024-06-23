interface MainImageProps {
  image: string
}

const MainImage: React.FC<MainImageProps> = ({ image }) => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-lightblue-100 rounded-2xl">
      <img
        src={image}
        alt="Main"
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  )
}

export default MainImage
