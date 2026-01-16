import { useState } from 'react'
import './App.css'
import Calculator from './components/Calculator'
import GameMode from './components/GameMode'

function App() {
  const [mode, setMode] = useState('home') // home, calculator, game

  return (
    <div className="app">
      {mode === 'home' && <Home setMode={setMode} />}
      {mode === 'calculator' && <Calculator setMode={setMode} />}
      {mode === 'game' && <GameMode setMode={setMode} />}
    </div>
  )
}

function Home({ setMode }) {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="title">🎮 Math Calculator Game 🎮</h1>
        <p className="subtitle">Learn math while having fun!</p>
      </div>
      
      <div className="mode-selection">
        <div className="mode-card calculator-card" onClick={() => setMode('calculator')}>
          <div className="icon">🧮</div>
          <h2>Calculator</h2>
          <p>Regular calculator for quick calculations</p>
          <button className="start-btn">Start</button>
        </div>
        
        <div className="mode-card game-card" onClick={() => setMode('game')}>
          <div className="icon">🎯</div>
          <h2>Game Mode</h2>
          <p>Solve math puzzles and earn points!</p>
          <button className="start-btn">Play</button>
        </div>
      </div>
    </div>
  )
}

export default App
