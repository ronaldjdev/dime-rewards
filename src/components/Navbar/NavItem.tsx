interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
}

/**
 * Renders a navigation item component.
 *
 * @param {Props} props - The props object containing the following properties:
 *   - href: The URL that the link should navigate to.
 *   - children: The content of the link.
 *   - rest: Additional props to be spread onto the anchor element.
 * @return {JSX.Element} The rendered navigation item component.
 */
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
