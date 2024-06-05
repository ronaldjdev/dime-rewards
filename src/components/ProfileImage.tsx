import Image from "next/image"
interface Props {
  src: string;
  size: {
    width: number;
    height: number;
  }
}
const ProfileImage = ({ size = {
  width: 500,
  height: 500,
} , src, }: Props) => {
  return (
    <Image
      className="object-cover w-40 h-40 bg-white mx-auto mt-4 border-8 border-gray-800 rounded-full"
      src={src}
      alt="Avatar"
      width={size.width} height={size.height}
    />
  );
};

export default ProfileImage;
