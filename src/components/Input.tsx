interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  name?: string
}
const Input: React.FC<Props> = ({ label, name, ...rest }) => {
  return (
    <>
      <label
        className="block text-grey-darker text-sm font-bold mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
        {...rest}
      />
    </>
  )
}

export default Input
