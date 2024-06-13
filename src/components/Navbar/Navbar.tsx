import { Button } from '@/components/Button'
import { Searchbar } from '@/components/Searchbar'
import { Progressbar } from '@/components/Progressbar'
import {
  CiShop as Shop,
  CiShoppingCart as ShoppingCar,
  CiSettings as IconConfig,
  CiBellOn as IconNoti,
} from 'react-icons/ci'
import NavLink from './NavItem'

let item = [
  {
    icon: <Shop strokeWidth="1" size="24" />,
    href: '/shop',
  },
  {
    icon: <ShoppingCar strokeWidth="1" size="24" />,
    href: '/order',
  },
  {
    icon: <IconNoti strokeWidth="1" size="24" />,
    href: '/preferences',
  },
]
export const Navbar: React.FC = () => {
  return (
    <>
      <nav className="w-full flex h-20 bg-blue-600 justify-between text-white items-center sticky z-10 top-0 ">
        <div className="w-fit px-5">Logo</div>
        <div className="w-2/5 flex px-2">
          <Searchbar />
        </div>
        <div className="flex px-2">
          <Progressbar />
        </div>
        <div className="flex gap-10 px-4 border-x text-white ">
          {item.map(({ icon, href }, index) => (
            <NavLink key={index} href={href}>
              {icon}
            </NavLink>
          ))}
        </div>
        <div className=" flex px-2">
          <Button title="Iniciar sesión" color="white" variant="outline" />
        </div>
      </nav>
    </>
  )
}
