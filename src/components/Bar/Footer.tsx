import Brand from '@/components/Button/Brand'

const Footer = () => {
  return (
    <footer className="bg-slate-100 rounded-lg  m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Brand />
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0">
            <li>
              <a href="/" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-black sm:text-center dark:text-black">
          © 2023{' '}
          <a href="/" className="hover:underline">
            DIME™
          </a>
          . Reservados todos los derechos.
        </span>
      </div>
    </footer>
  )
}

export default Footer
