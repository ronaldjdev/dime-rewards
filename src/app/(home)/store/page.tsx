import HeroStore from '@/components/Section/HeroStore'
import CategorySection from '@/components/Section/CategorySection'
import SimpleHeader from '@/components/Title/SimpleHeader'
import ProductCard from '@/components/Card/ProductCard'

const Store = () => {
  return (
    <main className="w-full flex h-full flex-col p-4 gap-5">
      <HeroStore />
      <SimpleHeader title="Categorias" color="text-black" />
      <CategorySection />
      <SimpleHeader title="Productos" color="text-black" />
      <ProductCard />
    </main>
  )
}

export default Store
