import {
  CiMedal as Badge,
  CiDesktop as Overview,
  CiStar as Quest,
  CiCalendarDate as Event,
} from 'react-icons/ci'

import SidebarIcon from '@/components/SidebarIcon'

interface ItemsProps {
  icon: JSX.Element
  text: string
}

const items: ItemsProps[] = [
  {
    icon: <Badge size={30} />,
    text: 'Insignias',
  },
  {
    icon: <Overview size={30} />,
    text: 'General',
  },
  {
    icon: <Quest size={30} />,
    text: 'Misiones',
  },
  {
    icon: <Event size={30} />,
    text: 'Eventos',
  },
]

/**
 * Renders the Sidebar component.
 *
 * @return {ReactElement} The rendered Sidebar component.
 */
export const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white w-20 h-full p-4">
      <ul>
        {items.map((item, index) => (
          <SidebarIcon key={index} icon={item.icon} text={item.text} />
        ))}
      </ul>
    </div>
  )
}
