import './App.scss'
import Input from '@/components/input/index'
import Division from '@/components/division/Division'
import Output from './components/output'
import { outputNames } from './constants/names'
import { useState } from 'react'
import useForm from './hooks/useForm'

function App() {
  const [age, setAge] = useState({ years: "--", months: "--", days: "--"});
  const [errors, setErrors] = useState({ day: "", month: "", year: "" });

  const sendData = async (data) => {
    let newErrors = { day: "", month: "", year: "" };
    const { day, month, year } = data;
    const today = new Date();
  
    if (!day) newErrors.day = "This field is required";
    if (!month) newErrors.month = "This field is required";
    if (!year) newErrors.year = "This field is required";
  
    if (day && (day < 1 || day > 31)) newErrors.day = "Must be a valid day";
    if (month && (month < 1 || month > 12)) newErrors.month = "Must be a valid month";
  
    const birthDate = new Date(year, month - 1, day);
    if (
      birthDate.getFullYear() != year ||
      birthDate.getMonth() + 1 != month ||
      birthDate.getDate() != day
    ) {
      newErrors.day = "Must be a valid date";
    }

    if (year > today.getFullYear()) {
      newErrors.year = "Must be in the past";
    }

    if (newErrors.day || newErrors.month || newErrors.year) {
      setErrors(newErrors);
      return;
    } else {

      setErrors({ day: "", month: "", year: "" });
  
      const today = new Date();
      let years = today.getFullYear() - birthDate.getFullYear();
      let months = today.getMonth() - birthDate.getMonth();
      let days = today.getDate() - birthDate.getDate();
  
      if (days < 0) {
        months -= 1;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      }
  
      if (months < 0) {
        years -= 1;
        months += 12;
      }
  
      setAge({ years, months, days });
    }
  };
  console.log(errors)
  
  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    day: '',
    month: '',
    year: ''
  })

  return (
    <main >
      <form 
      onSubmit={handleSubmit}
      aria-labelledby="input-section"
      className="input">
        <h2 id="input-section" className="sr-only">Input Section</h2>
        <div className='input__container'>
          <Input
          name = "day"
          placeholder = "DD" 
          value = {input.day}
          onChange = {handleInputChange}
          error = {errors.day}
          label__error = {`${errors.day ? "label__error" : ""}`}
          field__error = {`${errors.day ? "field__error" : ""}`}
          />

          <Input 
          name="month" 
          placeholder="MM"
          value = {input.month}
          onChange = {handleInputChange}
          error = {errors.month}
          label__error = {`${errors.month ? "label__error" : ""}`}
          field__error = {`${errors.month ? "field__error" : ""}`}
          />

          <Input 
          name="year" 
          placeholder="YYYY"
          value={input.year}
          onChange={handleInputChange}
          error = {errors.year}
          label__error = {`${errors.year ? "label__error" : ""}`}
          field__error = {`${errors.year ? "field__error" : ""}`}
          />
        </div>
      <Division />
      </form>
      <section 
      aria-labelledby="output-section"
      className="output">
        <h2 id="output-section" className="sr-only">Output Section</h2>

        <Output 
        value={age.years}
        label={age.years == 1 ? outputNames[0].year[0] : outputNames[0].year[1]}
        />

        <Output 
        value={age.months}
        label={age.months == 1 ? outputNames[0].month[0] : outputNames[0].month[1]}
        />

        <Output 
        value={age.days}
        label={age.days == 1 ? outputNames[0].day[0] : outputNames[0].day[1]}
        />
      </section>
    </main>
  )
}

export default App
