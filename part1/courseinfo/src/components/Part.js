import React from "react"

const Part = ({part, excercises}) => {
  return (
    <React.Fragment>
        <p> {part} {excercises}</p>
    </React.Fragment>
  )
}

export default Part;