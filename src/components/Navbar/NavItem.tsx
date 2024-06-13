interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
}

const NavItem: React.FC<Props> = ({ href, children, ...rest }) => {
  return (
    <div>
      <a href={href} {...rest}>
        {children}
      </a>
    </div>
  )
}

export default NavItem
