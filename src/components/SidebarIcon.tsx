interface Props {
  icon: any
  text: string
}
const SidebarIcon = ({ icon, text }: Partial<Props>) => {
  const hoverColor = "bg-indigo-500 rounded-md";
  return (
    <div className="w-fit h-fit p-2 relative group flex items-center justify-center overflow-hidden hover:overflow-visible ">
      <div className={`p-2 w-full h-full flex items-center justify-center cursor-pointer hover:${hoverColor}`}>
        {icon}
      </div>
      <div className="absolute z-10 left-full ml-2 bg-indigo-500 text-white text-sm font-semibold py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {text}
      </div>
    </div>
  );
};

export default SidebarIcon;
