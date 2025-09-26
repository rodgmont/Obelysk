import obelysklogo from './assets/obelysk.png'
import './App.css'

function App() {

  return (
    <>
      <div className='container'>
      <div className="logo">
        <a href="https://www.linkedin.com/company/obelysktch/" target="_blank">
          <img src={obelysklogo} className="logo" alt="Obelysk logo" />
        </a>
        </div>
      <div className="name">
        <h1>OBELYSK</h1>
        </div>
      <footer className='footer'>
        <p>© 2025 Obelysk Technologies, Inc. All rights reserved.</p>
      </footer>
      </div>
    </>
  )
}


export default App
