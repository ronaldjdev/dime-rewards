import { Button } from "./Button"
import { Searchbar } from "./Searchbar"
import { Progressbar } from "./Progressbar"

let item = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Products",
    href: "/products",
  }
]
export const Navbar = () => {
  return (
    <>
      <nav className="w-full flex h-20 bg-slate-400 justify-between items-center sticky z-10 top-0 ">
        <div className="w-fit px-5">
          Logo
        </div>
        <div className="w-fit px-5">
          menu
        </div>
        <div className="w-fit px-5">
          <Searchbar />
        </div>
        <div className="w-fit px-5">
         <Progressbar />
        </div>
        <div className="flex gap-10 border-x px-4">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <div className="w-fit px-5">
          <Button />
        </div>
      </nav>
    </>
  )
}