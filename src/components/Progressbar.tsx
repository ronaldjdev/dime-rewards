/**
 * Renders the Sidebar component.
 *
 * @return {ReactElement} The rendered Sidebar component.
 */
export const Progressbar: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 ">
      <div className="w-full flex justify-between items-center">
        <h2 className="uppercase ">Next:</h2>
        <h2 className="uppercase ">
          <span>200</span> dp
        </h2>
      </div>
      <div className="w-40 bg-gray-200 rounded-full h-1.5 ">
        <div className="bg-black h-1.5 rounded-full w-1/3"></div>
      </div>
    </div>
  )
}
