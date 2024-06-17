interface Props {
  title: string
  color: string
}
const HeaderSection: React.FC<Partial<Props>> = ({ title, color }) => {
  return (
    <div className="flex justify-center items-center gap-1 w-full rounded-2xl my-10">
      <div className="flex flex-col w-full h-full justify-center items-start gap-4">
        <h1
          className={`${color} first-letter:uppercase text-5xl font-medium p-none m-none pr-10`}
        >
          {title}
        </h1>
      </div>
    </div>
  )
}

export default HeaderSection
