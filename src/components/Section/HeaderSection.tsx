interface Props {
  title: string
  content: string
}
const HeaderSection: React.FC<Partial<Props>> = ({ title, content }) => {
  return (
    <div className="flex justify-center items-center gap-1 w-full rounded-2xl my-10">
      <div className="flex flex-col w-1/2 h-full justify-center items-start gap-4">
        <h1 className="first-letter:uppercase text-5xl font-medium p-none m-none pr-10">
          {title}
        </h1>
      </div>
      <div className="w-1/2 flex h-full justify-end items-center rounded-lg">
        <p className="text-sm p-none m-none w-9/12 first-letter:uppercase">
          {content}
        </p>
      </div>
    </div>
  )
}

export default HeaderSection
