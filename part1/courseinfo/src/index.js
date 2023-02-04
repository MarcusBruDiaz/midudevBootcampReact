import React from 'react'
import ReactDOM from 'react-dom'



/**
 
const Header = ({course}) => <h1>{course}</h1>  una forma corta de crear el componente Header
 */

const Header = (props) =>{
  const {course} = props

  console.log(props)
  return (
    <>
      <h1 style={{color: props.color}}>
        {course}
      </h1>
    </>
  )
}

const Part = (props)=>{
  return(
    <>
      <p style={{color:props.color}}>{props.name1} {props.amount1}</p>
      <p>{props.name2} {props.amount2}</p>
      <p>{props.name3} {props.amount3}</p>
    </>
  )
}

const Content = (props) =>{
  console.log(props)
  return(
    <div style={{color: props.color}}>
      <Part  color="yellow" name1={props.parts[0].name} amount1={props.parts[0].exercises} />
      <Part name2={props.parts[1].name} amount2={props.parts[1].exercises}/>
      <Part name3={props.parts[2].name} amount3={props.parts[2].exercises}/>
    </div>
  )
}

const Total = (props)=>{
  console.log(props.parts[0].name)
  return(
    <div>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} </p>
    </div>
  )
}




const App = () => {
  // const-definitions
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <> 
      <Header  color="red" course={course.name} />
      <Content color="blue" parts={course.parts} /> 
      <Total parts={course.parts} />
    </>
  )

}





ReactDOM.render(<App />, document.getElementById('root'))