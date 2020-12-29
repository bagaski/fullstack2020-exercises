import React from 'react';

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
            <Parts key={course.parts.id} course={course} />
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

export default Course