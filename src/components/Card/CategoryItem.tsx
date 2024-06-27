import MainImage from '@/components/Card/MainImage'

interface Props {
  src: string
  name: string
}
const CategoryItem: React.FC<Props> = ({ src, name }) => {
  return (
    <div className="w-full h-32 flex items-center justify-center bg-sky-100 p-4 rounded-2xl gap-4">
      <div className="w-10 h-10 rounded-full bg-white overflow-hidden">
        <MainImage image={src} />
      </div>
      <div>{name}</div>
    </div>
  )
}

export default CategoryItem
