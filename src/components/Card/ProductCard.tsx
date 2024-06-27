import ProductItem from '@/components/Card/ProductItem'

const dentalSuppliesCategories = [
  {
    name: 'Instrumentos de Diagnóstico',
    src: 'https://via.placeholder.com/150?text=Diagnóstico',
  },
  {
    name: 'Materiales de Restauración',
    src: 'https://via.placeholder.com/150?text=Restauración',
  },
  {
    name: 'Equipos de Endodoncia',
    src: 'https://via.placeholder.com/150?text=Endodoncia',
  },
  {
    name: 'Materiales de Impresión',
    src: 'https://via.placeholder.com/150?text=Impresión',
  },
  {
    name: 'Productos de Profilaxis',
    src: 'https://via.placeholder.com/150?text=Profilaxis',
  },
  {
    name: 'Materiales de Ortodoncia',
    src: 'https://via.placeholder.com/150?text=Ortodoncia',
  },
  {
    name: 'Instrumental Quirúrgico',
    src: 'https://via.placeholder.com/150?text=Quirúrgico',
  },
  {
    name: 'Accesorios de Esterilización',
    src: 'https://via.placeholder.com/150?text=Esterilización',
  },
]

const CategorySection = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-4 w-full h-full">
      {dentalSuppliesCategories.map((items, index) => (
        <ProductItem key={index} {...items} />
      ))}
    </div>
  )
}

export default CategorySection
