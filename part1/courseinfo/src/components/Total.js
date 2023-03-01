import React from "react"

const Total = (props) => {
  const excercisesCount = props.parts.reduce((sum, part) => sum + part.excercises, 0)

  return (
    <p>Total excercises: {excercisesCount}</p>
  )
}

export default Total;