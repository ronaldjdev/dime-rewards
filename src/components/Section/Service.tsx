import HeaderSection from '@/components/Section/HeaderSection'
import Cards from '@/components/Section/Cards'

const dataService = [
  {
    title: 'Descuentos Exclusivos',
    description:
      'Aprovecha precios especiales en una amplia gama de insumos odontológicos.',
    bgColor: 'bg-lime-100 text-black',
  },
  {
    title: 'Servicios personalizados',
    description:
      'Disfruta de atención personalizada y recomendaciones basadas en tus preferencias.',
    bgColor: 'bg-orange-100 text-black',
  },
  {
    title: 'Reservas prioritarias',
    description: 'Ofrece la posibilidad de reservar productos con antelación.',
    bgColor: 'bg-sky-100 text-black',
  },
]
const Service = () => {
  return (
    <div className="bg-zinc-950 text-white px-10 rounded-2xl pb-10">
      <HeaderSection
        title="Servicios que premian tu compromiso con la salud dental"
        content="estamos dedicados a apoyar a odontólogos y clínicas dentales en su misión de 
        ofrecer la mejor atención posible a sus pacientes. Nuestros servicios están diseñados 
        para proporcionar beneficios directos y prácticos a tu práctica dental"
      />
      <Cards service data={dataService} />
    </div>
  )
}
export default Service
