interface Props {
  url: string
  icon: JSX.Element
  color: string
}
/**
 * Renders a social media icon with a link.
 *
 * @param {Partial<Props>} props - The props for the SocialMedia component.
 * @param {string} props.url - The URL to link to. Defaults to '#'.
 * @param {JSX.Element} props.icon - The icon to display.
 * @param {string} props.color - The color of the icon. Defaults to 'bg-blue-500'.
 * @return {JSX.Element} The rendered SocialMedia component.
 */
const SocialMedia: React.FC<Partial<Props>> = ({
  url = '#',
  icon,
  color = 'bg-blue-500',
}) => {
  return (
    <div className="flex justify-center space-x-4">
      <a
        href={url}
        className={` ${color} w-10 h-10 rounded-md flex items-center justify-center`}
      >
        {icon}
      </a>
    </div>
  )
}

export default SocialMedia
