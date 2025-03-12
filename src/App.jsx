import './App.scss'
import Input from '@/components/input/index'
import Division from '@/components/division/Division'
import Output from './components/output'

function App() {

  return (
    <main >
      <section className="input">
        <Input />
      </section>
      <Division />
      <section className="output">
        <Output />
      </section>
    </main>
  )
}

export default App
