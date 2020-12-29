import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ course }) => {
    return (
        <h2>{course.name}</h2>
    )
}

const Parts = ({ course }) => {
    return (
        <div>
            <ul>
                {course.parts.map(part => <li key={part.id}>{part.name}: {part.exercises}</li>)}
            </ul>
        </div>
    )
}

const Content = ({ course }) => {
    return (
        <div>
            <Parts key={course.part.id} course={course} />
        </div>
    )
}

const Total = ({ course }) => {
    return (
        <div>
            <strong>Total exercises: </strong>
            <span>
                {course.parts.reduce((sum, part) => sum + part.exercises, 0)}
            </span>

        </div>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </div>
    )

}

const App = () => {
    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
            parts: [
                {
                    name: 'Fundamentals of React',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Using props to pass data',
                    exercises: 7,
                    id: 2
                },
                {
                    name: 'State of a component',
                    exercises: 14,
                    id: 3
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]

    return (
        <div>
            <h1>Web Development Curriculum</h1>
            {courses.map((course) => { return (<Course course={course} />) })}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))