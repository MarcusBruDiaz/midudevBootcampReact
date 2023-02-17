import React from "react";




const Display =({course})=>{
  return(
    <>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </>
  )
}



const Header = ({course}) =>{
    return (
      <>
        <h1>{course.name}</h1>
      </>
    )
}



const Part = ({name,exercises})=>{
    return(
      <>
          <p>{name} {exercises}</p>
      </>
    )
}
  


const Content = ({course}) =>{
  const parts = course.parts
  
    return(
      <>
        {parts.map((parts)=>(
          <Part key={parts.id} name={parts.name} exercises={parts.exercises}/>
        ))}

      </>
    )
}


const Total = ({course})=>{
  const parts = course.parts


  const total = parts.reduce((acc, cv)=>{
    return acc + cv.exercises 
  },0);

  return(
    <>
      <div>
        <p><strong>Total of {total} course</strong></p>
      </div>  
    </>
  )
}




const Course =({course})=>{

    return(
        <>
          {course.map((course)=>(
            <Display key={course.id} course={course}/>
          ))}
        </>
    )
}

export default Course



