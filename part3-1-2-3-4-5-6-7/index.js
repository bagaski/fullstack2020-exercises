const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')



app.use(morgan("tiny"))

app.use(cors())

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
    let d = new Date();
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

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
})


app.use(express.json())

app.post('/api/persons', (request, response) => {

    const generateId = () => {
    const maxId = persons.length > 0
        ? Math.max(...persons.map(p => p.id))
        : 0
    return maxId + 1
}

    const body = request.body

    if (!body.name || !body.number) {
        return response.status(400).json({
            error: 'The name or number is missing!'
        })
    }

    const person = {
        id: generateId(),
        name: body.name,
        number: body.number
    }

    let values = Object.values(person)
    console.log(values)
    values.includes(body.name)
    ? response.status(400).json({
        error: 'The name already exists in the phonebook. Name must be unique!'
        })
    : persons = persons.concat(person)

    response.json(person)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})