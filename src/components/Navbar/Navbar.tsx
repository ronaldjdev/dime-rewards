import {
  CiShop as Shop,
  CiShoppingCart as ShoppingCar,
  // CiSettings as IconConfig,
  CiBellOn as IconNoti,
} from 'react-icons/ci'

import { Button } from '@/components/Button/Button'
import { Searchbar } from '@/components/Bar/Searchbar'
import { Progressbar } from '@/components/Bar/Progressbar'

import NavLink from './NavItem'

const item = [
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

/**
 * Renders a navigation bar component with a logo, search bar, progress bar, navigation links, and a login button.
 *
 * @return {ReactElement} The rendered navigation bar component.
 */
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
          {/* <IconConfig/> */}
        </div>
      </nav>
    </>
  )
}
