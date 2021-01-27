const express = require('express')
const app = express()


let persons = [
    { 
        id: 1, 
        name: "Arto Hellas", 
        number: "040-123456" 
    }, 
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-532352"
    }, 
    {
        id: 3,
        name: "Dan Abramov",
        number: "12-34-2343263"
    }, 
    {
        id: 4,
        name: "Mary Poppendick",
        number: "039-322316"
    }
]

app.get('/', (request, response) => {
    response.send('<h1>Hello Express World!</h1>')
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/info', (request, response) => {
    var d = new Date();
    response.send(`<p>Phonebook has info for ${persons.length} people</p><i>${d}<i/>`)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)

    if (person) { 
    response.json(person) 
    } else { 
    response.status(404).end() }
})


const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)