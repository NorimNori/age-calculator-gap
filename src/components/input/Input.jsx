import './Input.scss'

const Input = ({ name, placeholder, value, onChange }) => {

  return (
    <div className="input__date">
      <label className="input__date-label" htmlFor={name}>{name}</label>
      <input 
        id={name}
        name={name}
        value={value}
        type = "number"
        onChange={onChange}
        className="input__date-field"
        placeholder={placeholder}
        aria-label={name}
      />
    </div>
  )
}

export default Input;