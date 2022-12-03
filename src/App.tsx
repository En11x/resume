import './App.css'
import { Pdf } from './components/Pdf'

function App() {
  return (
    <div
      style={{
        minWidth: '600px',
        maxWidth: '900px',
        margin: '5em auto',
      }}
    >
      <Pdf url="/resume.pdf" />
    </div>
  )
}

export default App
