import SidebarIcon from "@/components/SidebarIcon"
import { CiMedal as Badge, CiDesktop as Overview, CiStar as Quest, CiCalendarDate as Event } from "react-icons/ci";
const items = [
  {
    icon: <Badge size="30" />,
    text: "Insignias"
  },
  {
    icon: <Overview size="30" />,
    text: "General"
  },
  {
    icon: <Quest size="30" />,
    text: "Misiones"
  },
  {
    icon: <Event size="30" />,
    text: "Eventos"
  },
]
export const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-20 h-full p-4">
      <ul>
        {
          items.map(({ index, icon, text }: any) => (
            <SidebarIcon key={index} icon={icon} text={text} />
          ))
        }
      </ul>
    </div>
  )
}