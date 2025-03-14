import './App.scss'
import Input from '@/components/input/index'
import Division from '@/components/division/Division'
import Output from './components/output'
import { outputNames } from './constants/names'
import { useState } from 'react'
import useForm from './hooks/useForm'

function App() {
  const [age, setAge] = useState({ years: "--", months: "--", days: "--"});

  const sendData = async (data) => {
    console.log(data);
  }

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
        <Input
        name = "day"
        placeholder = "DD" 
        value = {input.day}
        onChange = {handleInputChange}
        />

        <Input 
        name="month" 
        placeholder="MM"
        value = {input.month}
        onChange = {handleInputChange}
        />

        <Input 
        name="year" 
        placeholder="YYYY"
        value={input.year}
        onChange={handleInputChange}
        />
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
