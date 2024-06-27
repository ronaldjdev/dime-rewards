interface MainImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  image: string
}

const MainImage: React.FC<MainImageProps> = ({ image, ...rest }) => {
  return (
    <img
      {...rest}
      src={image}
      alt="Main"
      className="w-full h-full object-cover"
    />
  )
}

export default MainImage
