import Image from 'next/image'

interface Props {
  src: string
  alt: string
  size: {
    width: number
    height: number
  }
}
/**
 * Renders a frontpage component with an image.
 *
 * @param {Props} props - The properties for the component.
 * @param {string} props.src - The source URL of the image.
 * @param {string} props.alt - The alternative text for the image.
 * @param {Object} props.size - The size of the image.
 * @param {number} props.size.width - The width of the image.
 * @param {number} props.size.height - The height of the image.
 * @return {JSX.Element} The rendered frontpage component.
 */
const Frontpage:React.FC<Props> = ({ src, alt, size })=>{
  return (
    <div className="overflow-hidden rounded-t-md">
      <Image
        src={src}
        alt={alt}
        className="w-full h-48 object-cover"
        width={size.width || 500}
        height={size.height || 500}
      />
    </div>
  )
}

export default Frontpage;
