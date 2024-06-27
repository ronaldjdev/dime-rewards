import Link from 'next/link'
/**
 * Renders the Sidebar component.
 *
 * @return {ReactElement} The rendered Sidebar component.
 */
export const Brand: React.FC = () => {
  return (
    <Link
      href="/"
      className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
      passHref
    >
      <img
        src="https://res.cloudinary.com/dcekvcyvf/image/upload/v1719498552/g6fttmnzhjaj2pxmuh89.png"
        alt="Dime Logo"
        className="h-8"
      />
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
        Dime
      </span>
    </Link>
  )
}

export default Brand
