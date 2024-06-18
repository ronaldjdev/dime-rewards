import { cardData } from "@/libs/utils"

import Cards from './Cards'
import CardItem from './CardItem'
import Header from './HeaderSection'

const Benefits = () => {
  return (
    <div className="flex flex-col justify-center items-center px-10 gap-4 w-full box-border">
      <div className="flex flex-col justify-center items-center gap-1 w-full  font-grey-500">
        <Header
          title="beneficios innovadores para profecionales de la salud oral"
          content="combinamos tecnología avanzada con un toque personal para
              ofrecerte el mejor servicio. Nuestro programa DIme Rewards está
              diseñado para recompensar la preferencia de los odontólogos y clínicas
              que confían en nosotros para sus insumos dentales."
        />
        <div className="flex justify-center items-center gap-4 w-full h-64 pt-5 rounded-2xl font-grey-500 ">
          <div className="flex w-1/2 h-full items-start  bg-black rounded-2xl text-white">
            <CardItem
              title="Acumulacion de puntos con cada compra"
              description=" Gana puntos cada vez que adquieras productos odontológicos,
              acumulándolos fácilmente en tu cuenta DIME Rewards."
            />
          </div>
          <div className="w-1/2 flex h-full justify-center items-center bg-sky-100 rounded-2xl"></div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-1 w-full rounded-2xl">
        <Cards  data={cardData} />
      </div>
    </div>
  )
}

export default Benefits
