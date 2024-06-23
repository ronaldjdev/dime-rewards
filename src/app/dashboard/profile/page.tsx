import { FaFacebookF as F } from 'react-icons/fa6'
import { SiWhatsapp as W, SiInstagram as I, SiGmail as G } from 'react-icons/si'

import ProfileImage from '@/components/Profile/ProfileImage'
import Frontpage from '@/components/Profile/Frontpage'
import SocialMedia from '@/components/SocialMedia'
import StatItem from '@/components/StatItem'
import { Button } from '@/components/Button/Button'
import Timeline from '@/components/Timeline'
import About from '@/components/Profile/AboutProfile'

const size = {
  width: 500,
  height: 500,
}
function handler() {
  return (
    <div className="flex w-full h-full">
      <div className="flex-1 p-4 relative h-full">
        <Frontpage
          src="https://via.placeholder.com/500"
          alt="Avatar"
          size={{ width: 500, height: 600 }}
        />
        <div className="absolute inset-20">
          <ProfileImage
            size={size}
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
        <div className="bg-indigo-950 text-center text-white flex flex-col justify-center items-center p-16 rounded-b-md">
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
              <StatItem value={'900k'} label={'Puntos'} />
            </div>
            <div className="w-[1px] bg-white h-8"></div>
            <div className="w-14 ">
              <StatItem value={'900'} label={'Quest'} />
            </div>
            <div className="w-[1px] bg-white h-8"></div>
            <div className="w-14">
              <StatItem value={'900'} label={'redimidos'} />
            </div>
          </div>
          <div className="flex justify-center mt-6 space-x-4">
            <Button title="Tienda" color="green" variant="filled" />
            <Button title="Mis compras" color="blue" variant="filled" />
          </div>
        </div>
        <div className="w-full h-20 bg-indigo-950 my-3 rounded-md"></div>
        <div className="flex w-full h-auto my-3 rounded-md gap-3">
          <div className="w-1/3 h-20  rounded-md flex flex-col gap-3">
            <div className="w-full h-auto p-4 bg-indigo-950 rounded-md">
              <About
                joinedDate="2014-08-16 19:00"
                city="Popayan"
                country="Colombia"
                email="erante@eran.com"
                phone={'123456789'}
                reviewText="This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time"
              />
            </div>
            <div className="w-full h-20 bg-indigo-950 rounded-md p-2">
              <h3 className="text-white font-bold capitalize">insignias:</h3>
            </div>
          </div>
          <div className="w-full h-20 bg-indigo-950 rounded-md">
            <Timeline />
          </div>
        </div>
      </div>
    </div>
  )
}

export default handler
