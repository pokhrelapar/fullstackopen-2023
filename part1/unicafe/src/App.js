import React from "react";
import Button from "./components/Button";
import { useState } from "react";
import Statistics from "./components/Statistics";


const App = () => {
	const [clicks, setClicks] = useState({good:0, neutral:0,bad:0})
	
	console.log(clicks)

	//eslint-disable-next-line
  	{/* The syntax may seem a bit strange at first. In practice { ...clicks } creates a new object that has 
      copies of all of the properties of the clicks object. 
      When we specify a particular property - e.g. good in { ...clicks, good: 1 }, 
	  the value of the good property in the new object will be 1.
    */}

    const handleGoodClick = () => {
    	setClicks({...clicks, good: clicks.good+1})
    }
  	const handleNeutralClick = () => {
		setClicks({...clicks, neutral: clicks.neutral+1})
	}
	
	const handleBadClick = () => {
		setClicks({...clicks, bad: clicks.bad+1})

	}

	
  	return (
		<div>
			<div> <h1>Give Feedback</h1></div>
			<Button handleClick={handleGoodClick} text='good'/>
			<Button handleClick={handleNeutralClick} text='neutral'/>
			<Button handleClick={handleBadClick} text='bad'/>

			<div> <h2>Statistics</h2></div>

			<Statistics clicks={clicks}/>
		</div>
  	)
};

export default App;
