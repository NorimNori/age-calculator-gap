import './Division.scss'

const Division = () => {
  return (
    <div 
    role="separator" 
    // aria-hidden="true"
    className="division">
      <span className="division__line"></span>
      <button className="division__icon" type='submit'></button>
    </div>
  )
}

export default Division