interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
}

const NavItem = ({ href, children, ...rest }: Props) => {
  return (
    <div>
      <a href={href} {...rest}>
        {children}
      </a>
    </div>
  )
}

export default NavItem
