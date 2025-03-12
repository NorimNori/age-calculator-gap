
const Output = ({value, label}) => {
  return (
    <div className="output__date">
      <span className="output__date-value">{value}</span>
      <span className="output__date-label">{label}</span>
    </div>
  )
}

export default Output