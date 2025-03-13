import './App.scss'
import Input from '@/components/input/index'
import Division from '@/components/division/Division'
import Output from './components/output'
import { inputNames, outputNames } from './constants/names'
import { useState } from 'react'

function App() {
  const [inputValue, setInputValue] = useState("2");

  return (
    <main >
      <section 
      aria-labelledby="input-section"
      className="input">
        <h2 id="input-section" className="sr-only">Input Section</h2>
        <Input
        name = {inputNames[0].day}
        placeholder = "DD" 
        />

        <Input 
        name={inputNames[0].month} 
        placeholder="MM" 
        />

        <Input 
        name={inputNames[0].year} 
        placeholder="YYYY" 
        />
      </section>
      <Division />
      <section 
      aria-labelledby="output-section"
      className="output">
        <h2 id="output-section" className="sr-only">Output Section</h2>

        <Output 
        value={inputValue}
        label={inputValue == 1 ? outputNames[0].year[0] : outputNames[0].year[1]}
        />

        <Output 
        value={inputValue}
        label={inputValue == 1 ? outputNames[0].month[0] : outputNames[0].month[1]}
        />

        <Output 
        value={inputValue}
        label={inputValue == 1 ? outputNames[0].day[0] : outputNames[0].day[1]}
        />
      </section>
    </main>
  )
}

export default App
