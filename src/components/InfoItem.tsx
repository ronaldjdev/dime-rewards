interface Props {
  label: string
  value: string
}

/**
 * Renders an InfoItem component with a label and a value.
 *
 * @param {Props} props - The properties for the InfoItem component.
 * @param {string} props.label - The label for the InfoItem.
 * @param {string} props.value - The value for the InfoItem.
 * @return {ReactElement} The rendered InfoItem component.
 */
const InfoItem: React.FC<Partial<Props>> = ({ label, value }) => {
  return (
    <div className="flex justify-between">
      <h2>{label}</h2>
      <h2>{value}</h2>
    </div>
  )
}

export default InfoItem
