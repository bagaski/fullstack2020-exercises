import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Statistics = (props) => {

    return (

        <div>
            <h1>Statistics</h1>
            {
                (props.all === 0) ?
                    <p>no feedback yet</p> :
                    <div>
                        <p>Voted <i>Good</i>: {props.good}</p>
                        <p>Voted <i>Neutral</i>: {props.neutral}</p>
                        <p>Voted <i>Bad</i>: {props.bad}</p>
                        <p>Total Votes: {props.all}</p>
                        <p>Positive: {props.good === 0 ? 0 : props.positive}%</p>
                        <p>Average: {props.good === 0 ? 0 : props.average}</p>
                    </div>
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
    const positive = parseFloat(good * 100 / all).toFixed(2); //only show 2 first decimals
    const average = parseFloat((good - bad) / all).toFixed(2);//only show 2 first decimals

    return (
        <div>
            <h1>Give Feedback</h1>
            <Button handleClick={goodHandler} text='good' />
            <Button handleClick={neuHandler} text='neutral' />
            <Button handleClick={badHandler} text='bad' />
            <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)