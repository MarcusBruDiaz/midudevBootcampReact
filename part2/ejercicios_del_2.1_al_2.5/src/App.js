import React from "react"
import Course from "./components/Course"


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1,
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2,
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3,
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },
  ]

  return (
    <>
      <div>
        <Course course={courses}/>
      </div>
    </>
  )
}



/*const App = () => {
    const course = {
      id: 1,
      name: 'Half Stack application development',
      parts: [

        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1,                                         //10
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2,                                           //17
        },
        {
          name: 'State of a component',
          exercises: 14,                                     //31
          id: 3,                
        },
        {
          name: 'Marcus te amo de verdad',
          exercises: 7,                                   //38
          id: 4,  
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 5,
        },
      ],
    }

    return <Course course={course} />
  }*/  // ANTIGUA ESTRUCTURA DE DATOS
  
  export default App