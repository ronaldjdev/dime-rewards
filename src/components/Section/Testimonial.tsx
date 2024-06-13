
interface Props {
  primary: any
  secundary: any
}

const Testimonial = () => {
  return (
    <div className="flex justify-center items-center gap-1 bg-sky-100 w-full h-[700px] p-5 rounded-2xl font-grey-500 overflow-hidden">
      <div className="flex flex-col w-1/2 h-full justify-center items-start">
        <h1> Lo que dicen nuestros clientes</h1>
      </div>
      <div className="w-1/2 flex h-full justify-center items-center"></div>
    </div>
  )
}

export default Testimonial
