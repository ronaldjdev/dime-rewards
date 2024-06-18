import { CiSearch as IconSearch } from 'react-icons/ci'

/**
 * Renders the Sidebar component.
 *
 * @return {ReactElement} The rendered Sidebar component.
 */

export const Searchbar: React.FC = () => {
  return (
    <div className="border border-white p-2 rounded-lg flex justify-between items-center w-full">
      <input
        type="text"
        placeholder="Search"
        className="w-full bg-transparent placeholder:text-white focus:outline-none"
      />
      <IconSearch strokeWidth="1" size="20" />
    </div>
  )
}
