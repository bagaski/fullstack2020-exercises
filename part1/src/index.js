import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [counter, setCounter] = useState(0)
  setTimeout(() => setCounter(counter + 1), 60000)
  return (
    <div><p>The counter counts:</p><code>{counter}</code></div>
    
  )
}

ReactDOM.render(<App />, document.getElementById('root'))