const NavItem = ({ href, children }: { href: string, children: React.ReactNode }) => {
  return (
    <div>
      <a href={href}>{children}</a>
    </div>
  )
}

export default NavItem