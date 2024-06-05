import ProfileImage from "@/components/ProfileImage";
import { Frontpage } from "@/components/Frontpage";
import SocialMedia from "@/components/SocialMedia";
import { FaFacebookF as F } from "react-icons/fa6";
import { SiWhatsapp as W, SiInstagram as I, SiGmail as G } from "react-icons/si";
import StatItem from "@/components/StatItem"

const size = {
  width: 500,
  height: 500,
}
export default function Home() {
  return (
    <div className="flex h-full bg-gray-900">
      <div className="flex-1 p-4 bg-gray-900 relative h-full">
        <Frontpage src="https://via.placeholder.com/500" alt="Avatar" size={{ width: 500, height: 600 }} />
        <div className="absolute inset-20">
          <ProfileImage size={size} src="https://via.placeholder.com/500" />
        </div>
        <div className="bg-gray-800 text-center text-white flex flex-col justify-center items-center p-16 rounded-b-md">
          <h1 className="mt-2 text-2xl">Marina Valentine</h1>
          <p className="text-gray-400">www.gamehuntress.com</p>
          <div className="flex justify-center mt-4 space-x-4">
            <SocialMedia url="#" icon={<F />} color="bg-blue-500" />
            <SocialMedia url="#" icon={<I />} color="bg-pink-500" />
            <SocialMedia url="#" icon={<G />} color="bg-red-500" />
            <SocialMedia url="#" icon={<W />} color="bg-green-500" />
          </div>

          <div className="w-64 flex items-center justify-center gap-4 mt-4">
            <div className="w-14">
              <StatItem value={"900k"} label={"Puntos"} />
            </div>
            <div className="w-[1px] bg-white h-8"></div>
            <div className="w-14 ">
              <StatItem value={"900"} label={"Quest"} />
            </div>
            <div className="w-[1px] bg-white h-8"></div>
            <div className="w-14">
              <StatItem value={"900"} label={"redimidos"} />
            </div>
          </div>
          <div className="flex justify-center mt-6 space-x-4">
            <button className="px-4 py-2 text-white bg-green-600 rounded-md">Tienda</button>
            <button className="px-4 py-2 text-white bg-blue-600 rounded-md">Mis Compras</button>
          </div>
        </div>
        <div className="w-full h-10 bg-gray-800 my-3 rounded-md"></div>
      </div>
    </div>
    // <main className="flex min-h-screen flex-col items-center justify-between p-8">


    // </main>
  );
}


