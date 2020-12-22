import React from 'react'
import ReactDOM from 'react-dom'

const Header = () => { 
  
  const course = 'Half Stack application development'
  
  return ( 
  <div>
    <h1>{course}</h1>
  </div>
  );
}

const Part = (props) => {
  return (
<div>
   <p>
        {props.title} {props.exercises}
   </p>
  </div>
  )
}

const Content = () => {

  return (
    <div>
      <Part title='Fundamentals of React' exercises={10} /> 
      <Part title='Using props to pass data' exercises={7} />
      <Part title='State of a component' exercises={14} /> 
    </div>
  )
}

const Total = (props) => {

  return (
  <div>
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  </div>
  )
  }
  
const App = () => {
  
  return (
    <div>
      <Header />
      <Content />
      <Total exercises1={10} exercises2={7} exercises3={14}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))