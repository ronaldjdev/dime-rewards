import SimpleHeader from './SimpleHeader'
import TestimonialCard from './TestimonialCard'
import MainImage from './MainImage'

const Testimonial: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-1 bg-zinc-950 w-full h-auto p-10 rounded-2xl font-grey-500">
      <div className="flex w-full h-fit justify-between items-start">
        <h2 className="w-fit mb-4 text-white">Testimonios felices</h2>
        <h2 className="w-fit text-white">2024</h2>
      </div>
      <div className="w-full flex h-full justify-start items-center gap-2">
        <div className="w-1/2 flex flex-col">
          <SimpleHeader
            color="text-white"
            title="lo que dicen nuestros clientes"
          />
          <div className="w-full flex flex-col gap-2">
            <div className="flex gap-2">
              <div className="flex-1 h-64 rounded-2xl text-white">
                <TestimonialCard
                  image="https://www.cubdens.com/wp-content/uploads/2019/09/shutterstock_358283126-1.png"
                  name="Alice Thompson"
                  text="It was the best decision I made for my teeth!"
                  profession="Odontologo"
                  bgColor="bg-white text-black"
                />
              </div>
              <div className="flex-1 h-64 bg-black rounded-2xl text-white">
                <TestimonialCard
                  image="https://www.cubdens.com/wp-content/uploads/2019/09/shutterstock_358283126-1.png"
                  profession="Odontologo"
                  name="Alice Thompson"
                  text="It was the best decision I made for my teeth!"
                  bgColor="bg-white text-black"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 h-64 bg-black rounded-2xl text-white">
                <MainImage image="https://www.cubdens.com/wp-content/uploads/2019/09/shutterstock_358283126-1.png" />
              </div>
              <div className="flex-1 h-64 rounded-2xl text-white">
                <TestimonialCard
                  image="https://www.cubdens.com/wp-content/uploads/2019/09/shutterstock_358283126-1.png"
                  name="Alice Thompson"
                  text="It was the best decision I made for my teeth!"
                  profession="Odontologo"
                  bgColor="bg-white text-black"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full flex flex-col">
          <div className="flex flex-col w-full h-full gap-2">
            <div className="w-full h-full bg-black rounded-2x">
              <MainImage image="https://www.cubdens.com/wp-content/uploads/2019/09/shutterstock_358283126-1.png" />
            </div>
            <div className="flex gap-2">
              <div className="flex-1 h-64 bg-black rounded-2xl text-white">
                <TestimonialCard
                  image="https://www.cubdens.com/wp-content/uploads/2019/09/shutterstock_358283126-1.png"
                  name="Alice Thompson"
                  text="It was the best decision I made for my teeth!"
                  profession="Odontologo"
                  bgColor="bg-white text-black"
                />
              </div>
              <div className="flex-1 h-64 rounded-2xl text-white">
                <TestimonialCard
                  image="https://www.cubdens.com/wp-content/uploads/2019/09/shutterstock_358283126-1.png"
                  name="Alice Thompson"
                  text="It was the best decision I made for my teeth!"
                  profession="Odontologo"
                  bgColor="bg-white text-black"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
