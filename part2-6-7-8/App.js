import React, { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([{}])
    const [newPerson, setNewPerson] = useState('type a name...')
    const [newNumber, setNewNumber] = useState('type phonenumber...')

    const addPerson = (event) => {
        event.preventDefault()
        setNewPerson(event.target.value)
        setNewNumber(event.target.value)
        const personsObject = {
            content: newPerson + ': ',
            number: newNumber,
            id: persons.length
        }
        setPersons(persons.concat(personsObject))

        persons.some(person => person.content === newPerson) ? alert(`${newPerson} is already added to phonebook`) : setNewPerson('');
        setNewNumber('');

        console.log(newPerson, persons)
    }

    const handlePersonChange = (event) => {
        setNewPerson(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const noBullets = {
        listStyleType: 'none',
        padding: '0px',
        margin: '0px'
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input type='text' value={newPerson} onChange={handlePersonChange} />
                </div>
                <div>number: <input type='text' value={newNumber} onChange={handleNumberChange} /></div>
                <div>
                    <button type='submit'>Add Person</button>
                </div>
            </form>
            <h2>Phone Numbers</h2>
            <ul style={noBullets}>
                {persons.map(person => <li key={person.id}>{person.id} {person.content}
                    {person.number}</li>)}
            </ul>
        </div>
    )
}

export default App