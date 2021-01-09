import React, { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])
    const [newPerson, setNewPerson] = useState('type a name...')
    const [newNumber, setNewNumber] = useState('type phonenumber...')
    const [filtered, setFiltered] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        setNewPerson(event.target.value)
        setNewNumber(event.target.value)
        const personsObject = {
            name: newPerson +': ',
            number: newNumber,
            id: persons.length
        }
        setPersons(persons.concat(personsObject))
       
        //using some() method which returns true if the name already exists and fires alert.
        persons.some(person => person.name === newPerson) ? alert(`${newPerson} is already added to phonebook`) : setNewPerson('');
        setNewNumber('');
        
        console.log(filtered)
    }

    const handlePersonChange = (event) => {
        setNewPerson(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    } 

    const handleFilteredChange = (event) => {
        setFiltered(event.target.value)

        persons.filter(person => person.name === filtered ? console.log(filtered) : console.log(persons))
    } 

    const noBullets  = {
            listStyleType: 'none',
            padding: '0px',
            margin: '0px'
        }
    
    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                filter names: <input type='text' onChange={handleFilteredChange} />
            </div>
            <h2>Add Names</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input type='text' value={newPerson} onChange={handlePersonChange}/>
                </div>
                <div>number: <input type='text' value={newNumber} onChange={handleNumberChange}/></div>
                <div>
                    <button type='submit'>Add Person</button>
                </div>
            </form>
            <h2>Phone Numbers</h2>
            <ul style={noBullets}>
                {persons.map(person => <li key={person.id}>{person.name}  {': '} 
                    <i>{person.number}</i></li>)}
            </ul>
        </div>
    )
}

export default App