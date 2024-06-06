import Image from "next/image";
interface Props {
  src: string;
  alt: string;
  size: {
    width: number;
    height: number;
  }
}
export function Frontpage({src, alt, size} : Props) {
  return <div className="overflow-hidden rounded-t-md">
    <Image src={src} alt={ alt } className="w-full h-48 object-cover" width={size.width || 500} height={size.height || 500} />
  </div>;
}
