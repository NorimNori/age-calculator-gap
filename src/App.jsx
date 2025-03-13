import './App.scss'
import Input from '@/components/input/index'
import Division from '@/components/division/Division'
import Output from './components/output'
import { inputNames } from './constants/names'

function App() {

  return (
    <main >
      <section 
      aria-labelledby="input-section"
      className="input">
        <h2 id="input-section" className="sr-only">Input Section</h2>
        {inputNames.map((input, index) => (
          <Input
          key = {index}
          name = {input.name}
          placeholder = {input.placeholder}
          />
        ))}
      </section>
      <Division />
      <section 
      aria-labelledby="output-section"
      className="output">
        <h2 id="output-section" className="sr-only">Output Section</h2>
        <Output />
      </section>
    </main>
  )
}

export default App
