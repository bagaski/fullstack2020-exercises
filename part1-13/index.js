import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    const [selected, setSelected] = useState(0)
    let [voted, setVoted] = useState([0, 0, 0, 0, 0, 0])

    let num = Math.floor(Math.random() * (anecdotes.length - 1))

    const clickSelect = () => {
        setSelected(num++)
    }

    const clickVote = () => {
        const copy = [...voted]
        copy[selected] += 1;
        setVoted(copy)
    }

    const styled = {
        fontSize: '21px',
        width: '280px'
    }

    return (
        <div>
            <p style={styled}><i>{props.anecdotes[selected]}</i></p>
            <p>This anecdote has {voted[selected]} votes</p>
            <div>
                <button onClick={clickVote}>Vote</button>
                <button onClick={clickSelect}>Next anecdote</button>
            </div>
            {console.log(voted)}
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)
