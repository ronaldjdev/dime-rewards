'use client'

import { Button } from '@/components/Button'
import { Brand } from '@/components/Brand'
import { navbarOptions as itemsNav } from '@/libs/utils'
import { useEffect, useState } from 'react'
import NavLink from '@/components/Navbar/NavItem'

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <nav
      className={` ${scrolled ? 'border-b-2 shadow-md transition-shadow duration-300 ease-in-out' : ''}  w-full flex items-center justify-center py-2 px-4 sticky z-10 top-0 bg-white ${scrolled ? 'border-b-2 border-gray-300' : ''} `}
    >
      <div className="max-w-[1970px] flex items-center justify-between w-full ">
        <Brand />
        <div className="hidden md:flex items-center justify-center gap-12 ">
          {itemsNav.map(({ name, href }, index) => (
            <NavLink key={index} href={href} className="">
              {name}
            </NavLink>
          ))}
        </div>
        <Button title="Iniciar sesion" color="black" />
      </div>
    </nav>
  )
}

export default Navbar