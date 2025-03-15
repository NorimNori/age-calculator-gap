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
    const today = new Date();
  
    const day = data.day.trim() !== "" ? Number(data.day) : null;
    const month = data.month.trim() !== "" ? Number(data.month) : null;
    const year = data.year.trim() !== "" ? Number(data.year) : null;

    if (day === null) newErrors.day = "This field is required";
    if (month === null) newErrors.month = "This field is required";
    if (year === null) newErrors.year = "This field is required";

    if (day !== null && (isNaN(day) || day < 1 || day > 31)) newErrors.day = "Must be a valid day";
    if (month !== null && (isNaN(month) || month < 1 || month > 12)) newErrors.month = "Must be a valid month";
    if (year !== null && (isNaN(year) || year > today.getFullYear())) newErrors.year = "Must be in the past";

    const birthDate = new Date(year, month - 1, day);
    if (
      year !== null &&
      month !== null &&
      day !== null &&
      (birthDate.getFullYear() !== year ||
        birthDate.getMonth() + 1 !== month ||
        birthDate.getDate() !== day)
    ) {
      newErrors.day = "Must be a valid date";
    }

    if (newErrors.day || newErrors.month || newErrors.year) {
      setErrors(newErrors);
      setAge({ years: "--", months: "--", days: "--" }); 
      return;
    }

    setErrors({ day: "", month: "", year: "" });
  
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
