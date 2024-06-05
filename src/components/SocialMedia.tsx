interface Props {
  url: string;
  icon: JSX.Element;
  color: string;
}
const SocialMedia = ({url = "#", icon, color ="bg-blue-500"}: Partial<Props>) => {
  return (
    <div className="flex justify-center space-x-4">
      <a href={url} className={` ${color} w-10 h-10 rounded-md flex items-center justify-center`}>{icon}</a>
    </div>
  )
}

export default SocialMedia;