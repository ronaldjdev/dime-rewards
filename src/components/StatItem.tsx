interface Props {
  label: string
  value: string
}

/**
 * Renders a single stat item with a value and label.
 *
 * @param {Props} props - The props object containing the value and label.
 * @param {string} props.value - The value to display.
 * @param {string} props.label - The label to display.
 * @return {JSX.Element} The rendered stat item.
 */
const StatItem: React.FC<Props> = ({ value, label }) => {
  return (
    <div className="w-14">
      <div className="text-white text-xl font-bold">{value}</div>
      <div className="text-slate-400 text-xs font-bold uppercase">{label}</div>
    </div>
  )
}

export default StatItem
