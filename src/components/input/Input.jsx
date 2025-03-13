const Input = ({ name, placeholder }) => {

  return (
    <div className="input__date">
      <label className="input__date-label" htmlFor={name}>{name}</label>
      <input 
        id={name}
        className="input__date-field"
        placeholder={placeholder}
        aria-label={name}
      />
    </div>
  )
}

export default Input;