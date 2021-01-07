import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Form = (props) => {

    return (
        <form onSubmit={props.addperson}>
            <div>
                name: <input type='text' value={props.newperson} onChange={props.changeperson} />
            </div>
            <div>
                number: <input type='text' value={props.newnumber} onChange={props.changenumber} /></div>
            <div>
                <button type='submit'>Add</button>
            </div>
        </form>
    )

}

const App = () => {
    const [persons, setPersons] = useState([])
    const [newPerson, setNewPerson] = useState('type a name...')
    const [newNumber, setNewNumber] = useState('type phonenumber...')

    useEffect(() => {
        console.log('effect')
        axios
            .post('http://localhost:3001/persons')
            .then(response => {
                console.log('promise fulfilled')
                setPersons(persons.concat(response.data))
                setNewPerson('set person');
            })
    }, [])
    console.log('render', persons.length, 'persons')

    const addPerson = (event) => {
        event.preventDefault()
        setNewPerson(event.target.value)
        setNewNumber(event.target.value)
        const personsObject = {
            name: newPerson,
            number: newNumber,
            
        }
        setPersons(persons.concat(personsObject))

        persons.some(person => person.name === newPerson) ? alert(`${newPerson} is already added to phonebook`) : setNewPerson('');
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
            <Form addperson={addPerson} newperson={newPerson} newnumber={newNumber} changeperson={handlePersonChange} changenumber={handleNumberChange} />
            <h2>Phone Numbers</h2>
            <ul style={noBullets}>
                {persons.map(person => <li key={person.id}>{person.id} <i>{person.name}: </i>
                    {person.number}</li>)}
            </ul>
        </div>
    )
}

export default App