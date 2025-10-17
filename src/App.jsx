import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Payment from './components/Payment'

function App() {
  const [showPayment, setShowPayment] = useState(true)

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-4 mb-4">
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Vite + React + Tailwind</h1>
          <p className="text-gray-400 mb-8">Payment Component Demo</p>

          <button
            onClick={() => setShowPayment(!showPayment)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200 mb-8"
          >
            {showPayment ? 'Hide' : 'Show'} Payment Form
          </button>
        </div>

        {showPayment && <Payment />}
      </div>
    </div>
  )
}

export default App
