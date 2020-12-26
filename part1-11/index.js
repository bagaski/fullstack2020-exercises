import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Statistic = (props) => {
    const styled = {
        border: '1px solid #aaa',
        color: '#888'
    }

    return (

        <div>
            {
                <table>
                    <tbody>
                        <tr>
                            <td style={styled}>{props.text}</td>
                            <td>{props.value}</td>
                        </tr>
                    </tbody>
                </table>
            }
        </div>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const goodHandler = () => { setGood(good + 1) };
    const neuHandler = () => { setNeutral(neutral + 1) };
    const badHandler = () => { setBad(bad + 1) };

    const all = good + neutral + bad;
    const positive = good === 0 ? 0 : parseFloat(good * 100 / all).toFixed(2); //only show 2 first decimals
    const average = good === 0 ? 0 : parseFloat((good - bad) / all).toFixed(2);//only show 2 first decimals

    return (
        <div>
            <h1>Give Feedback</h1>
            <Button handleClick={goodHandler} text='good' />
            <Button handleClick={neuHandler} text='neutral' />
            <Button handleClick={badHandler} text='bad' />
            <h1>Various Statistics</h1>
            {(all === 0) ?
                <p>no feedback yet</p> :
                <div>
                    <Statistic text='good' value={good} />
                    <Statistic text='neutral' value={neutral} />
                    <Statistic text='bad' value={bad} />
                    <Statistic text='positive' value={positive} />
                    <Statistic text='average' value={average} />
                </div>}
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)

ReactDOM.render(<App />,
    document.getElementById('root')
)