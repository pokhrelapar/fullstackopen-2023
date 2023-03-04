import React from "react"

const Total = ({parts}) => {
  const excercisesCount = parts.reduce((sum, part) => sum + part.excercises, 0)

  return (
    <p>Total excercises: {excercisesCount}</p>
  )
}

export default Total;