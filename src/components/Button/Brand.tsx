// import logo2 from "../../public/icon-192x192.png"
/**
 * Renders the Sidebar component.
 *
 * @return {ReactElement} The rendered Sidebar component.
 */
export const Brand: React.FC = () => {
  return (
    <a href="/" className="h-10">
      <img
        src="/icon-192x192.png"
        alt="loguo"
        className="h-full w-full object-cover"
        width={0}
        height={0}
      />
    </a>
  )
}
