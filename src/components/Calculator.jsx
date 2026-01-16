// import { useState } from 'react'
// import '../styles/Calculator.css'

// function Calculator({ setMode }) {
//   const [display, setDisplay] = useState('0')
//   const [previousValue, setPreviousValue] = useState(null)
//   const [operation, setOperation] = useState(null)
//   const [waitingForNewValue, setWaitingForNewValue] = useState(false)
//   const [history, setHistory] = useState([])

//   const handleNumber = (num) => {
//     if (waitingForNewValue) {
//       setDisplay(String(num))
//       setWaitingForNewValue(false)
//     } else {
//       setDisplay(display === '0' ? String(num) : display + num)
//     }
//   }

//   const handleDecimal = () => {
//     if (waitingForNewValue) {
//       setDisplay('0.')
//       setWaitingForNewValue(false)
//     } else if (!display.includes('.')) {
//       setDisplay(display + '.')
//     }
//   }

//   const handleOperation = (op) => {
//     const currentValue = parseFloat(display)

//     if (previousValue === null) {
//       setPreviousValue(currentValue)
//     } else if (operation && !waitingForNewValue) {
//       const result = performCalculation(previousValue, currentValue, operation)
//       setDisplay(String(result))
//       setPreviousValue(result)
//     }

//     setOperation(op)
//     setWaitingForNewValue(true)
//   }

//   const performCalculation = (prev, current, op) => {
//     switch (op) {
//       case '+':
//         return prev + current
//       case '-':
//         return prev - current
//       case '×':
//         return prev * current
//       case '÷':
//         return current !== 0 ? prev / current : 0
//       case '%':
//         return prev % current
//       default:
//         return current
//     }
//   }

//   const handleEquals = () => {
//     if (operation && previousValue !== null) {
//       const currentValue = parseFloat(display)
//       const result = performCalculation(previousValue, currentValue, operation)
//       const historyEntry = `${previousValue} ${operation} ${currentValue} = ${result}`
      
//       setHistory([historyEntry, ...history.slice(0, 9)])
//       setDisplay(String(result))
//       setPreviousValue(null)
//       setOperation(null)
//       setWaitingForNewValue(true)
//     }
//   }

//   const handleClear = () => {
//     setDisplay('0')
//     setPreviousValue(null)
//     setOperation(null)
//     setWaitingForNewValue(false)
//   }

//   const handleBackspace = () => {
//     if (display.length > 1) {
//       setDisplay(display.slice(0, -1))
//     } else {
//       setDisplay('0')
//     }
//   }

//   const buttons = [
//     ['7', '8', '9', '÷'],
//     ['4', '5', '6', '×'],
//     ['1', '2', '3', '-'],
//     ['0', '.', '=', '+'],
//     ['%', 'C', '⌫']
//   ]

//   return (
//     <div className="calculator-container">
//       <button className="back-btn" onClick={() => setMode('home')}>← Home</button>
      
//       <div className="calculator-wrapper">
//         <div className="calculator-main">
//           <h1 className="calc-title">🧮 Math Calculator</h1>
          
//           <div className="display-screen">
//             <div className="display-value">{display}</div>
//           </div>

//           <div className="button-grid">
//             {buttons.map((row, rowIdx) => (
//               <div key={rowIdx} className="button-row">
//                 {row.map((btn) => {
//                   let className = 'calc-button'
//                   if (btn === '=') className += ' equals-btn'
//                   if (btn === 'C') className += ' clear-btn'
//                   if (['+', '-', '×', '÷', '%'].includes(btn)) className += ' operation-btn'
//                   if (btn === '⌫') className += ' backspace-btn'

//                   return (
//                     <button
//                       key={btn}
//                       className={className}
//                       onClick={() => {
//                         if (btn === '=') handleEquals()
//                         else if (btn === 'C') handleClear()
//                         else if (btn === '⌫') handleBackspace()
//                         else if (btn === '.') handleDecimal()
//                         else if (['+', '-', '×', '÷', '%'].includes(btn)) handleOperation(btn)
//                         else handleNumber(parseInt(btn))
//                       }}
//                     >
//                       {btn}
//                     </button>
//                   )
//                 })}
//               </div>
//             ))}
//           </div>
//         </div>

//         {history.length > 0 && (
//           <div className="history-panel">
//             <h3 className="history-title">📝 History</h3>
//             <div className="history-list">
//               {history.map((entry, idx) => (
//                 <div key={idx} className="history-item">
//                   {entry}
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Calculator


import { useState } from 'react'
import '../styles/Calculator.css'

function Calculator({ setMode }) {
  // We primarily need the display string and a flag to check if we just showed a result
  const [display, setDisplay] = useState('')
  const [history, setHistory] = useState([])
  const [isResult, setIsResult] = useState(false)

  // Helper to check if a character is an operator
  const isOperator = (char) => ['+', '-', '×', '÷', '%'].includes(char)

  const handleNumber = (num) => {
    if (isResult) {
      // If we just showed a result, start a fresh calculation
      setDisplay(String(num))
      setIsResult(false)
    } else {
      // Otherwise append to the expression
      setDisplay(display === '0' ? String(num) : display + num)
    }
  }

  const handleDecimal = () => {
    if (isResult) {
      setDisplay('0.')
      setIsResult(false)
      return
    }

    // Logic to prevent multiple decimals in the *current number segment*
    // We split by operators to find the last number being typed
    const parts = display.split(/[\+\-\×\÷\%]/)
    const currentNumber = parts[parts.length - 1]

    if (!currentNumber.includes('.')) {
      setDisplay(display + '.')
    }
  }

  const handleOperation = (op) => {
    if (display === '' && op !== '-') return // Can't start with operator (except minus/negative)
    
    // If we just calculated a result, we continue using that result for the next operation
    if (isResult) {
      setIsResult(false)
      setDisplay(display + op)
      return
    }

    const lastChar = display.slice(-1)

    // Prevent double operators (e.g., "++"), but allow swapping them
    if (isOperator(lastChar)) {
      // Replace the last operator with the new one
      setDisplay(display.slice(0, -1) + op)
    } else {
      setDisplay(display + op)
    }
  }

  const handleEquals = () => {
    // Prevent evaluating empty or incomplete expressions
    if (!display || isOperator(display.slice(-1))) return

    try {
      // 1. Replace visual symbols with JavaScript operators
      let sanitizedExpression = display
        .replaceAll('×', '*')
        .replaceAll('÷', '/')
        .replaceAll('%', '/100*') // Simplistic percent handling (as percentage of)

      // 2. Evaluate the string safely
      // Note: new Function() is a safer alternative to eval() in this controlled context
      // eslint-disable-next-line no-new-func
      const result = new Function('return ' + sanitizedExpression)()

      // 3. Format result (limit decimals to avoid floating point errors)
      const formattedResult = Number.isInteger(result) 
        ? String(result) 
        : String(parseFloat(result.toFixed(8))) // Limit precision

      // 4. Update History
      const historyEntry = `${display} = ${formattedResult}`
      setHistory([historyEntry, ...history.slice(0, 9)])

      // 5. Update Display
      setDisplay(formattedResult)
      setIsResult(true) // Flag that the current text is a final result

    } catch (error) {
      setDisplay('Error')
      setIsResult(true)
    }
  }

  const handleClear = () => {
    setDisplay('0')
    setIsResult(false)
  }

  const handleBackspace = () => {
    if (isResult) {
      setDisplay('0')
      setIsResult(false)
    } else {
      if (display.length > 1) {
        setDisplay(display.slice(0, -1))
      } else {
        setDisplay('0')
      }
    }
  }

  const buttons = [
    ['7', '8', '9', '÷'],
    ['4', '5', '6', '×'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+'],
    ['%', 'C', '⌫']
  ]

  return (
    <div className="calculator-container">
      <button className="back-btn" onClick={() => setMode('home')}>← Home</button>
      
      <div className="calculator-wrapper">
        <div className="calculator-main">
          <h1 className="calc-title">🧮 Math Calculator</h1>
          
          <div className="display-screen">
            {/* We show the full string here now */}
            <div className="display-value">{display}</div>
          </div>

          <div className="button-grid">
            {buttons.map((row, rowIdx) => (
              <div key={rowIdx} className="button-row">
                {row.map((btn) => {
                  let className = 'calc-button'
                  if (btn === '=') className += ' equals-btn'
                  if (btn === 'C') className += ' clear-btn'
                  if (['+', '-', '×', '÷', '%'].includes(btn)) className += ' operation-btn'
                  if (btn === '⌫') className += ' backspace-btn'

                  return (
                    <button
                      key={btn}
                      className={className}
                      onClick={() => {
                        if (btn === '=') handleEquals()
                        else if (btn === 'C') handleClear()
                        else if (btn === '⌫') handleBackspace()
                        else if (btn === '.') handleDecimal()
                        else if (['+', '-', '×', '÷', '%'].includes(btn)) handleOperation(btn)
                        else handleNumber(btn) // Passed as string directly
                      }}
                    >
                      {btn}
                    </button>
                  )
                })}
              </div>
            ))}
          </div>
        </div>

        {history.length > 0 && (
          <div className="history-panel">
            <h3 className="history-title">📝 History</h3>
            <div className="history-list">
              {history.map((entry, idx) => (
                <div key={idx} className="history-item">
                  {entry}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Calculator