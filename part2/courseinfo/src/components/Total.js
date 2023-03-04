import React from "react"

const Total = ({parts}) => {

  console.log("Parts", parts)
  const exercisesCount = parts.reduce((sum, part) => sum + part.exercises, 0)



  console.log("Values",exercisesCount)

  return (
    <p>Total excercises: {exercisesCount}</p>
  )
}

export default Total;