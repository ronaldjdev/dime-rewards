import Card from './Card'
import CardItem from './CardItem'
import Header from "./HeaderSection"

const Benefits = () => {
  return (
    <div className="flex flex-col justify-center items-center m gap-4 w-full box-border">
      <div className="flex flex-col justify-center items-center gap-1 w-full  font-grey-500">
        <Header
          title="beneficios innovadores para profecionales de la salud oral"
          content="combinamos tecnología avanzada con un toque personal para
              ofrecerte el mejor servicio. Nuestro programa DIme Rewards está
              diseñado para recompensar la preferencia de los odontólogos y clínicas
              que confían en nosotros para sus insumos dentales."
        />
        {/* <div className="flex justify-center items-center gap-1 w-full rounded-2xl  my-10">
          <div className="flex flex-col w-1/2 h-full justify-center items-start gap-4">
            <h1 className="first-letter:uppercase text-5xl font-medium p-none m-none pr-10">
              beneficios innovadores para profecionales de la salud oral
            </h1>
          </div>
          <div className="w-1/2 flex h-full justify-end items-center rounded-lg">
            <p className="text-sm p-none m-none w-9/12 first-letter:uppercase">
              combinamos tecnología avanzada con un toque personal para
              ofrecerte el mejor servicio. Nuestro programa DIme Rewards está
              diseñado para recompensar la preferencia de los odontólogos y
              clínicas que confían en nosotros para sus insumos dentales.
            </p>
          </div>
        </div> */}
        <div className="flex justify-center items-center gap-4 w-full h-64 pt-5 rounded-2xl font-grey-500 ">
          <div className="flex w-1/2 h-full items-start  bg-black rounded-2xl text-white">
            <CardItem
              title="Acumulacion de puntos con cada compra"
              description=" Gana puntos cada vez que adquieras productos odontológicos,
              acumulándolos fácilmente en tu cuenta DIME Rewards."
              // bgColor="text-white"
            />
          </div>
          <div className="w-1/2 flex h-full justify-center items-center bg-sky-100 rounded-2xl">
            {/* <img className="w-96 h-96" src="./logo_dime_rewards.png" alt="logo" /> */}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-1 w-full rounded-2xl">
        <Card />
      </div>
    </div>
  )
}

export default Benefits
