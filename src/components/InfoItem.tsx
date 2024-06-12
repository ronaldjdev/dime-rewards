const InfoItem = ({ label, value }) => {
  return (
    <div className="flex justify-between">
      <h2>{label}</h2>
      <h2>{value}</h2>
    </div>
  )
}

export default InfoItem
