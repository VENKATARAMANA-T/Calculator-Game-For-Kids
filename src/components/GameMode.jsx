import { useState, useEffect } from 'react'
import '../styles/GameMode.css'

function GameMode({ setMode }) {
  const [score, setScore] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(null)
  const [userAnswer, setUserAnswer] = useState('')
  const [feedback, setFeedback] = useState('')
  const [streak, setStreak] = useState(0)
  const [difficulty, setDifficulty] = useState('easy')
  const [gameStarted, setGameStarted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(30)
  const [isTimeUp, setIsTimeUp] = useState(false)

  // Timer effect
  useEffect(() => {
    if (gameStarted && !isTimeUp) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setIsTimeUp(true)
            return 0
          }
          return prev - 1
        })
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [gameStarted, isTimeUp])

  const generateQuestion = () => {
    let num1, num2, operator
    
    switch (difficulty) {
      case 'easy':
        num1 = Math.floor(Math.random() * 10) + 1
        num2 = Math.floor(Math.random() * 10) + 1
        operator = ['+', '-'][Math.floor(Math.random() * 2)]
        break
      case 'medium':
        num1 = Math.floor(Math.random() * 20) + 1
        num2 = Math.floor(Math.random() * 20) + 1
        operator = ['+', '-', '×'][Math.floor(Math.random() * 3)]
        break
      case 'hard':
        num1 = Math.floor(Math.random() * 50) + 1
        num2 = Math.floor(Math.random() * 50) + 1
        operator = ['+', '-', '×', '÷'][Math.floor(Math.random() * 4)]
        break
      default:
        num1 = 5
        num2 = 3
        operator = '+'
    }

    let correctAnswer
    switch (operator) {
      case '+':
        correctAnswer = num1 + num2
        break
      case '-':
        correctAnswer = num1 - num2
        break
      case '×':
        correctAnswer = num1 * num2
        break
      case '÷':
        correctAnswer = Math.round((num1 / num2) * 100) / 100
        break
      default:
        correctAnswer = 0
    }

    setCurrentQuestion({
      num1,
      num2,
      operator,
      correctAnswer
    })
  }

  const startGame = () => {
    setGameStarted(true)
    setScore(0)
    setStreak(0)
    setTimeLeft(30)
    setIsTimeUp(false)
    setUserAnswer('')
    setFeedback('')
    generateQuestion()
  }

  const handleSubmitAnswer = () => {
    if (!userAnswer.trim()) return

    const userNum = parseFloat(userAnswer)
    const isCorrect = Math.abs(userNum - currentQuestion.correctAnswer) < 0.01

    if (isCorrect) {
      const points = difficulty === 'easy' ? 10 : difficulty === 'medium' ? 20 : 50
      setScore(score + points)
      setStreak(streak + 1)
      setFeedback('🎉 Correct! Amazing!')
    } else {
      setStreak(0)
      setFeedback(`❌ Wrong! Answer: ${currentQuestion.correctAnswer}`)
    }

    setUserAnswer('')
    setTimeout(() => {
      setFeedback('')
      generateQuestion()
    }, 1500)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmitAnswer()
    }
  }

  const endGame = () => {
    setGameStarted(false)
    setUserAnswer('')
    setFeedback('')
  }

  const getDifficultyColor = () => {
    if (difficulty === 'easy') return '#FFD700'
    if (difficulty === 'medium') return '#FF6B6B'
    return '#FF00FF'
  }

  return (
    <div className="game-container">
      <button className="back-btn" onClick={() => setMode('home')}>← Home</button>

      {!gameStarted ? (
        <div className="game-menu">
          <div className="menu-content">
            <h1 className="game-title">🎯 Math Game Challenge 🎯</h1>
            <p className="game-description">Solve math problems as fast as you can!</p>

            <div className="difficulty-selection">
              <h2>Choose Difficulty:</h2>
              <div className="difficulty-buttons">
                <button
                  className={`difficulty-btn easy ${difficulty === 'easy' ? 'active' : ''}`}
                  onClick={() => setDifficulty('easy')}
                >
                  ⭐ Easy (1-10)
                </button>
                <button
                  className={`difficulty-btn medium ${difficulty === 'medium' ? 'active' : ''}`}
                  onClick={() => setDifficulty('medium')}
                >
                  ⭐⭐ Medium (1-20)
                </button>
                <button
                  className={`difficulty-btn hard ${difficulty === 'hard' ? 'active' : ''}`}
                  onClick={() => setDifficulty('hard')}
                >
                  ⭐⭐⭐ Hard (1-50)
                </button>
              </div>
            </div>

            <button className="start-game-btn" onClick={startGame}>
              🚀 Start Game 🚀
            </button>
          </div>
        </div>
      ) : (
        <div className="game-screen">
          <div className="game-header">
            <div className="score-board">
              <div className="stat">
                <span className="label">Score:</span>
                <span className="value">{score}</span>
              </div>
              <div className="stat">
                <span className="label">Streak:</span>
                <span className="value">{streak}</span>
              </div>
              <div className="stat">
                <span className="label">Time:</span>
                <span className={`value ${timeLeft < 10 ? 'warning' : ''}`}>{timeLeft}s</span>
              </div>
            </div>
          </div>

          {isTimeUp ? (
            <div className="game-over">
              <div className="game-over-content">
                <h2 className="game-over-title">⏰ Time's Up! ⏰</h2>
                <div className="final-score">Final Score: {score}</div>
                <div className="final-streak">Best Streak: {streak}</div>
                <button className="play-again-btn" onClick={startGame}>
                  🔄 Play Again
                </button>
              </div>
            </div>
          ) : (
            <div className="question-area">
              {currentQuestion && (
                <>
                  <div className="question-display">
                    <span className="question-number">{currentQuestion.num1}</span>
                    <span className="question-operator">{currentQuestion.operator}</span>
                    <span className="question-number">{currentQuestion.num2}</span>
                    <span className="question-equals">=</span>
                    <span className="question-mark">?</span>
                  </div>

                  {feedback && (
                    <div className={`feedback ${feedback.includes('Correct') ? 'correct' : 'incorrect'}`}>
                      {feedback}
                    </div>
                  )}

                  <div className="answer-input-area">
                    <input
                      type="number"
                      value={userAnswer}
                      onChange={(e) => setUserAnswer(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Your answer"
                      className="answer-input"
                      autoFocus
                    />
                    <button
                      className="submit-answer-btn"
                      onClick={handleSubmitAnswer}
                    >
                      ✓ Answer
                    </button>
                  </div>
                </>
              )}
            </div>
          )}

          <button className="end-game-btn" onClick={endGame}>
            Quit Game
          </button>
        </div>
      )}
    </div>
  )
}

export default GameMode
