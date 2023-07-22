import React from 'react'

const PersonForm = ( {newName, newNumber, handlePeopleChange, handleNumberChange, addEntry}) => {
  return (

    <form onSubmit={addEntry}>
		<div style={{marginTop: 1+"em"}}>
			Name: <input value={newName} onChange={handlePeopleChange} />
		</div>

		<div style={{marginTop: 1+"em"}}>
			Phone Number: <input value={newNumber} onChange={handleNumberChange} />
		</div>

		<div>
			<button type="submit" style={{marginTop: 2+"em"}}> Add</button>
		</div>
	</form>
    
  )
}

export default PersonForm