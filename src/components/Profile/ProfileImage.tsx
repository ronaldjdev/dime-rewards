import Image from 'next/image'

interface Size {
    width: number
    height: number
}
interface Props {
  src: string
  size: Size
}

/**
 * Profile image component displaying an image with specified size and source.
 *
 * @param {Props} size - The size of the image containing width and height.
 * @param {string} src - The image source URL.
 * @return {JSX.Element} The rendered image component.
 */
const ProfileImage: React.FC<Props> = ({
  size = {
    width: 500,
    height: 500,
  },
  src,
}) => {
  return (
    <Image
      className="object-cover w-40 h-40 bg-white mx-auto mt-4 border-8 border-gray-800 rounded-full"
      src={src}
      alt="Avatar"
      width={size.width}
      height={size.height}
    />
  )
}

export default ProfileImage
