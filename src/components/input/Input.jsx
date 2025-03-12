const Input = ({ name, placeholder }) => {
  const inputId = name.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="input__date">
      <label className="input__date-label" htmlFor={inputId}>{name}</label>
      <input 
        id={inputId}
        className="input__date-field"
        placeholder={placeholder}
        aria-label={name}
      />
    </div>
  )
}

export default Input;