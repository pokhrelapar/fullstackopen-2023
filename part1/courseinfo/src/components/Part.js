import React from "react"

const Part = (props) => {
  return (
    <React.Fragment>
        <p> {props.part} {props.excercise}</p>
    </React.Fragment>
  )
}

export default Part;