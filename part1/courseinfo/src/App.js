import React from "react"

import Content from "./components/Content"
import Header from "./components/Header"
import Total from "./components/Total"


const App = () => {

  const course = {
	name:'Half Stack application development',
	parts : [
		{
			name: 'Fundamentals of React',
			excercises:10
		},

		{
			name: 'Using props to pass data',
			excercises: 7
		},

		{
			name: 'State of a component',
			excercises: 14
		}
	]
  }

  return (
    <div>
      <Header course ={course.name} />
	  <Content parts={course.parts}/>
	  <Total parts={course.parts}/>
    </div>
  )
}

export default App;