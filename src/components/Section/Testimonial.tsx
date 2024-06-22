import SimpleHeader from './SimpleHeader'
import TestimonialCard from './TestimonialCard'
import MainImage from './MainImage'

const Testimonial: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center relative bg-zinc-950 gap-1 w-full h-auto p-10 rounded-2xl font-grey-500">
      <div className="flex w-full h-fit justify-between items-start z-10">
        <h2 className="w-fit mb-4 text-white">Testimonios felices</h2>
        <h2 className="w-fit text-white">2024</h2>
      </div>
      <div className="w-full flex h-full justify-start items-center gap-2 z-10">
        <div className="w-1/2 flex flex-col">
          <SimpleHeader
            color="text-white"
            title="lo que dicen nuestros clientes"
          />
          <div className="w-full flex flex-col gap-2">
            <div className="flex gap-2">
              <div className="flex-1 h-64 rounded-2xl text-white">
                <TestimonialCard
                  name="Carlos Morales"
                  text="El plan de puntos me ayudó a acceder a cursos de capacitación continua. ¡Gran ventaja para mi carrera!"
                  profession="Higienista Dental"
                  bgColor="bg-white text-black"
                />
              </div>
              <div className="flex-1 h-64 bg-black rounded-2xl text-white">
                <TestimonialCard
                  name="Dra. Claudia Martínez"
                  profession="Endodoncista"
                  text="La consultoría personalizada y los descuentos en productos especializados son invaluables."
                  bgColor="bg-white text-black"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 h-64 bg-transparent rounded-2xl text-white">
                <MainImage image="https://img.freepik.com/foto-gratis/hermoso-dentista-trabajando-clinica-dental_1157-28591.jpg?t=st=1719005617~exp=1719009217~hmac=8c4bd5a124b3c336c86c0b87396a74e4ba342f02c031072e17d911481dabb1f8&w=826" />
              </div>
              <div className="flex-1 h-64 rounded-2xl text-white">
                <TestimonialCard
                  name="Dr. Juan Carlos Pardo"
                  profession="Periodoncista"
                  text="Acceso a tecnología de vanguardia y excelentes eventos de networking. Muy satisfecho."
                  bgColor="bg-white text-black"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full flex flex-col">
          <div className="flex flex-col w-full h-full gap-2">
            <div className="w-full h-full bg-black rounded-2x">
              <MainImage image="https://img.freepik.com/fotos-premium/cara-pantalla-verde-mujer-signo-ok-sonrisa-aprobacion-contra-fondo-estudio-retrato-femenino-persona-simbolo-gesto-mano-perfecto-apoyo-motivacion-felicidad_590464-162984.jpg?w=996" />
            </div>
            <div className="flex gap-2">
              <div className="flex-1 h-64 bg-black rounded-2xl text-white">
                <TestimonialCard
                  name="Dra. María Fernanda Ramírez"
                  text="Transformó mi clínica. Los descuentos y el acceso prioritario son maravillosos."
                  profession="Odontóloga General"
                  bgColor="bg-white text-black"
                />
              </div>
              <div className="flex-1 h-64 rounded-2xl text-white">
                <TestimonialCard
                  name="Dr. Andrés González"
                  profession="Esp. en Ortodoncia"
                  text="El plan de puntos me permitió actualizar mis equipos sin comprometer mi presupuesto. ¡Excelente!"
                  bgColor="bg-white text-black"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="./Lines.svg"
        alt="pattern"
        className="absolute w-full h-full object-cover z-0 opacity-5"
      />
    </div>
  )
}

export default Testimonial
