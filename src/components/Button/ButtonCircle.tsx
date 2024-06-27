import Link from 'next/link'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href: string
  icon: JSX.Element
  className: string
}

const ButtonCircle: React.FC<Props> = ({
  href = '/',
  icon,
  className,
  ...rest
}) => {
  const hoverStyle = 'text-black hover:bg-white border hover:border-black '
  return (
    <>
      <Link href={href} passHref>
        <button
          {...rest}
          className={`${className} transition-colors ease-in-out delay-150 absolute top-5 right-10 p-4 hover:${hoverStyle} bg-black flex items-center justify-center rounded-full text-white`}
        >
          {icon}
        </button>
      </Link>
    </>
  )
}

export default ButtonCircle
