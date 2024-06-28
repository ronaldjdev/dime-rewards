import SimpleHeader from '@/components/Title/SimpleHeader'
import TestimonialCard from '@/components/Card/TestimonialCard'
import MainImage from '@/components/Card/MainImage'

const Testimonial: React.FC = () => {
  return (
    <div className="flex flex-col justify-start items-center bg-zinc-950 gap-1 w-full h-full p-10 rounded-2xl font-grey-500 relative">
      <div className="flex w-full h-full justify-between items-start z-10">
        <h2 className="w-fit mb-4 text-white">Testimonios felices</h2>
        <h2 className="w-fit text-white">2024</h2>
      </div>
      <div className="flex gap-2 z-10">
        <div className="w-1/2 h-full flex flex-col">
          <SimpleHeader
            color="text-white"
            title="lo que dicen nuestros clientes"
          />
          <div className="w-full grid grid-cols-2 grid-rows-2 gap-2">
            <TestimonialCard
              name="Carlos Morales"
              text="El plan de puntos me ayudó a acceder a cursos de capacitación continua. ¡Gran ventaja para mi carrera!"
              profession="Higienista Dental"
              bgColor="bg-white text-black"
            />
            <TestimonialCard
              name="Dra. Claudia Martínez"
              profession="Endodoncista"
              text="La consultoría personalizada y los descuentos en productos especializados son invaluables."
              bgColor="bg-white text-black"
            />
            <div className="flex-1 bg-transparent rounded-2xl text-white overflow-hidden">
              <MainImage image="https://img.freepik.com/foto-gratis/hermoso-dentista-trabajando-clinica-dental_1157-28591.jpg?t=st=1719005617~exp=1719009217~hmac=8c4bd5a124b3c336c86c0b87396a74e4ba342f02c031072e17d911481dabb1f8&w=826" />
            </div>
            <TestimonialCard
              name="Dr. Juan Carlos Pardo"
              profession="Periodoncista"
              text="Acceso a tecnología de vanguardia y excelentes eventos de networking. Muy satisfecho."
              bgColor="bg-white text-black"
            />
          </div>
        </div>
        <div className="w-1/2 h-full flex flex-col gap-2 items-end justify-end">
          <div className="w-full h-full rounded-2xl overflow-hidden">
            <MainImage image="https://res.cloudinary.com/dcekvcyvf/image/upload/w_1000,h_730,c_fill/v1719459212/ht32hp0iytvkfwutuisn.jpg" />
          </div>
          <div className="flex gap-2 w-full h-fit">
            <TestimonialCard
              name="Dra. María Fernanda Ramírez"
              text="Transformó mi clínica. Los descuentos y el acceso prioritario son maravillosos."
              profession="Odontóloga General"
              bgColor="bg-white text-black"
            />
            <TestimonialCard
              name="Dr. Andrés González"
              profession="Esp. en Ortodoncia"
              text="El plan de puntos me permitió actualizar mis equipos sin comprometer mi presupuesto. ¡Excelente!"
              bgColor="bg-white text-black"
            />
          </div>
        </div>
      </div>
      <div className="bg-testimonial-pattern opacity-5 absolute w-full h-full bg-cover z-0 top-0 bg-center"></div>
    </div>
  )
}

export default Testimonial
