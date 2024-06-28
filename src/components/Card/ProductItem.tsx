import MainImage from '@/components/Card/MainImage'
import Button from '@/components/Button/Button'

interface Props {
  src: string
  name: string
}
const ProductItem: React.FC<Props> = ({ src, name }) => {
  return (
    <div className="w-full h-80 flex flex-col items-center justify-center bg-emerald-100 rounded-2xl gap-4">
      <div className="w-full h-full bg-white overflow-hidden rounded-t-2xl">
        <MainImage image={src} />
      </div>
      <div className="p-2 flex flex-col gap-4">
        <h2 className="text-base truncate w-64">{name}</h2>
        <div className="flex justify-between items-center">
          <h2>⭐⭐⭐⭐⭐</h2>
          <h2 className="bg-sky-300 rounded-md w-fit text-white px-1 font-bold">
            5.0
          </h2>
        </div>
        <div className="flex justify-between items-center pb-2">
          <h2 className="font-bold text-xl">500 ⭐DP</h2>
          <Button variant="text" title="Añadir" />
        </div>
      </div>
    </div>
  )
}

export default ProductItem
