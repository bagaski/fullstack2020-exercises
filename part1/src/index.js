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


const Content = (props) => {

  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'
  

  return (
    <div>
      <p>
        {part1} {props.exercises1}
      </p>
      <p>
        {part2} {props.exercises2}
      </p>
      <p>
        {part3} {props.exercises3}
      </p>
      
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