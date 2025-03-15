import './Input.scss'

const Input = ( props ) => {

  const { 
    name, 
    placeholder, 
    value, 
    onChange, 
    label__error, 
    field__error, 
    error 
  } = props;

  return (
    <div className="input__date">
      <label className={`input__date-label ${label__error}`} htmlFor={name}>{name}</label>
      <input 
        id={name}
        name={name}
        value={value}
        type = "text"
        onChange={onChange}
        className={`input__date-field ${field__error}`}
        placeholder={placeholder}
        aria-label={name}
      />
      <p className="date__error">{error}</p>
    </div>
  )
}

export default Input;