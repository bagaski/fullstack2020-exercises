import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => {

    const mr10 = {
        marginRight: '10px'
    }

    return (
        <button onClick={handleClick} style={mr10}>
            {text}
        </button>
    )

}

const Display = ({ counter }) => <div>{counter}</div>


const App = () => {
    const [counter, setCounter] = useState(0)

    const addOne = () => setCounter(counter + 1);
    const makeZero = () => setCounter(0);
    const timesThree = () => setCounter(counter * 3);

    return (
        <div>
            <p>The counter counts:</p>
            <Display counter={counter} />
            <Button handleClick={addOne} text='+ 1' />
            <Button handleClick={timesThree} text='* 3' />
            <Button handleClick={makeZero} text='= 0' />

        </div >
    )
}

ReactDOM.render(<App />, document.getElementById('root'))